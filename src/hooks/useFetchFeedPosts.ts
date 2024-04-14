import {useState, useEffect, useCallback, useRef} from 'react'
import { useDispatch, useSelector } from '../store';
import feedRedux from '../store/modules/feed';

export const useFetchFeedPost = () => {

  const dispatch = useDispatch();
  const rootState = useSelector((state) => state);

  const feeds = feedRedux.getters.feeds(rootState);
  const users = feedRedux.getters.users(rootState);
  const isFeedsLoading = feedRedux.getters.isfeedsLoading(rootState);

  // State for storing the list of items
  const [data, setData] = useState<any>([]);
  // State for search and filter query params
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const initialFeed = useRef(true);
  const initialUsers = useRef(true);

  const LIMIT = 10;

  const fetchData = useCallback(async () => {
try{
    const response = await dispatch(feedRedux.actions.feeds({ limit: LIMIT, query: searchQuery, page: page }));
    // Update the data state with the fetched data
    if (response) {
    let feedPosts = [];
    if (searchQuery) {
      feedPosts= [...response?.data];
    } else {
        feedPosts =  [...data, ...response?.data?.data];
    }
     setData(feedPosts);
    }
      } catch(err) {
      console.error(err);
      }
  }, [data, dispatch, searchQuery, page]);

  const fetchUsers = useCallback(async() => {
  try {
  await dispatch(feedRedux.actions.users())
  } catch(err) {
    console.error(err);
  }
  }, [dispatch])

  useEffect(() => {
    if (initialFeed.current) {
      initialFeed.current = false;
      return
    }
    fetchData();
  },[page, searchQuery])

  useEffect(() => {
    if (initialUsers.current) {
      initialUsers.current = false;
      return
    }
   fetchUsers()
  },[fetchUsers])

  // Implement the infinite scroll event handler
  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.scrollHeight;

    // Check if the user has scrolled to the bottom of the page
    if (scrollPosition >= documentHeight - 100 && feeds?.data?.pagination?.hasMore && !isFeedsLoading) {
      setPage((prev) => prev + 1);
    }

  }, [feeds, isFeedsLoading]);

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return {
    data : data, setSearchQuery, searchQuery, setPage, setData, isFeedsLoading, users
  }
}
