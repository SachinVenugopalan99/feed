import {useState, useEffect, useCallback, useRef} from 'react'
import { useDispatch, useSelector } from '../store';
import feedRedux from '../store/modules/feed';

export const useFetchFeedPost = () => {

  // State for storing the list of items
  // State for search and filter query params
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const dispatch = useDispatch();
  const rootState = useSelector((state) => state);

  const feeds = feedRedux.getters.feeds(rootState);
  const users = feedRedux.getters.users(rootState);
  const isFeedsLoading = feedRedux.getters.isfeedsLoading(rootState);
  const feedData = feedRedux.getters.feedData(rootState);
  const feedCurrentPage = feedRedux.getters.feedCurrentPage(rootState);
  const feedIncludedPages = feedRedux.getters.feedIncludedPages(rootState);

  const LIMIT = 10;

  const fetchData = useCallback(async () => {
    try{
    setIsLoading(true);
    const response: any = await dispatch(feedRedux.actions.feeds({ limit: LIMIT, query: searchQuery, page: feedCurrentPage }));
    // Update the data state with the fetched data
    if (response) {
    let feedPosts: any = [...feedData];
    if (searchQuery) {
      feedPosts= [...response?.data];
    } else {
       const includedPages = {...feedIncludedPages};
        if (!includedPages.hasOwnProperty(response?.data?.pagination?.page)) {
        feedPosts =  [...feedData, ...response?.data?.data];  
        includedPages[response?.data?.pagination?.page] = true;
        console.log(includedPages);
        dispatch(feedRedux.actions.setFeedIncludedPages(includedPages));
        }
    }
     dispatch(feedRedux.actions.setFeedData(feedPosts));
     sessionStorage.setItem("data", JSON.stringify(feedData));
     sessionStorage.setItem("page", JSON.stringify(feedCurrentPage));
     sessionStorage.setItem("includedPages", JSON.stringify(feedIncludedPages));
    }
      } catch(err) {
      console.error(err);
      } finally {
        setIsLoading(false);
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedData, searchQuery, feedCurrentPage, feedIncludedPages]);

  const fetchUsers = useCallback(async() => {
  try {
  await dispatch(feedRedux.actions.users())
  } catch(err) {
    console.error(err);
  }
  }, [dispatch])

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[feedCurrentPage, searchQuery])

  useEffect(() => {
   fetchUsers()
  },[fetchUsers])

    useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

    useEffect(() => {
    if (!isOnline) {
      const storageData = JSON.parse(sessionStorage.getItem('data') as any);
      const storagePage = JSON.parse(sessionStorage.getItem('page'as string) as any);
      const storageIncludedPages = JSON.parse(sessionStorage.getItem('includedPages'as string) as any);
     dispatch(feedRedux.actions.setFeedData(storageData));
     dispatch(feedRedux.actions.setFeedCurrentPage(storagePage));
      dispatch(feedRedux.actions.setFeedIncludedPages(storageIncludedPages));
    }
  },[isOnline, dispatch])

  // Implement the infinite scroll event handler
  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.scrollHeight;

    // Check if the user has scrolled to the bottom of the page
    if (scrollPosition >= documentHeight - 100 && feeds?.data?.pagination?.hasMore && !isFeedsLoading && !isLoading) {
     dispatch(feedRedux.actions.setFeedCurrentPage(feedCurrentPage + 1));
    }

  }, [feeds, isFeedsLoading, isLoading, feedCurrentPage, dispatch]);

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const setIncludedPages = useCallback((val: any) => {
    dispatch(feedRedux.actions.setFeedIncludedPages(val));
  }, [dispatch])

    const setPage = useCallback((val: any) => {
    dispatch(feedRedux.actions.setFeedCurrentPage(val));
  }, [dispatch])

  return {
    data : feedData, setSearchQuery, setIncludedPages, searchQuery, setPage, isFeedsLoading, users
  }
}
