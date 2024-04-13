import React, {useState, useEffect, useCallback} from 'react'
import { useDispatch, useSelector } from '../store';
import feedRedux from '../store/modules/feed';

export const useFetchFeedPost = () => {

  const dispatch = useDispatch();
  const rootState = useSelector((state) => state);

  const feeds = feedRedux.getters.feeds(rootState);
  const isFeedsLoading = feedRedux.getters.isfeedsLoading(rootState);

  // State for storing the list of items
  const [data, setData] = useState<any>([]);
  const [searchData, setSearchData] = useState<any>([]);
  // State for search and filter query params
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const LIMIT = 10;

  const fetchData = useCallback(async () => {
try{
    const response = await dispatch(feedRedux.actions.feeds({ limit: LIMIT, query: searchQuery, page: page }));
    console.log(response)
    // Update the data state with the fetched data
    if (response?.data?.data?.length) {
    const feedPosts =  [...data, ...response?.data?.data];
     setData(feedPosts);
    }
      } catch(err) {
      console.error(err);
      }
  }, [data, dispatch, searchQuery, page]);

//   useEffect(() => {
//     if (searchQuery) {
//       setData([]);
//     } else {
//       setSearchData([]);
//   fetchData();
//     }
// }, [searchQuery]);

  useEffect(() => {
    fetchData();
  },[page, searchQuery])

  //     useEffect(() => {
  //   setData([]);
  // }, [searchQuery]);

  // Implement the infinite scroll event handler
  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.scrollHeight;

    // Check if the user has scrolled to the bottom of the page
    if (scrollPosition >= documentHeight - 150 && feeds?.data?.pagination?.hasMore && !isFeedsLoading) {
      // Increment the year offset to fetch previous years
      // const year = data?.length ? data?.[data?.length - 1]?.year : yearOffset;
      // setYearOffset(year + 1);
      setPage((prev) => prev + 1);
    }

    // Check if the user has scrolled to the top of the page
    if (window.scrollY === 0 ) {
            // const year = data?.length ? data?.[0]?.year: yearOffset;
      // Decrement the year offset to fetch next years
              // setYearOffset(year - 1);
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
    data : searchQuery? searchData: data, setSearchQuery, searchQuery
  }
}
