import React, {useEffect, memo} from 'react';
import PageContainer from '../components/PageContainer/PageContainer';
import Navbar from '../components/Navbar/Navbar';
import FeedWrapper from '../components/FeedWrapper/FeedWrapper';
import { useFetchFeedPost } from '../hooks/useFetchFeedPosts';
import UsersWrapper from '../components/UsersWrapper/UsersWrapper';
import { Wrapper } from './ListFeedPage.style';
import { useSelector, useDispatch } from '../store';
import feedRedux from '../store/modules/feed';

const ListFeedPage = () => {

  const dispatch = useDispatch();
  const rootState = useSelector((state) => state);
  const scrollPosition = feedRedux.getters.scrollPosition(rootState);
  
  const {data, setSearchQuery, setIncludedPages, setPage, isFeedsLoading, users} = useFetchFeedPost();

  useEffect(() => {
    fetch('https://rigi-react-assignment-ii-server-production.up.railway.app/api/users', {
            headers: {'Authorization': 'XM0ooo4EG8puK9EPQ16M3KGxSA3ZsCKS', "Access-Control-Allow-Origin": "*"}
    })
  }, [])

    useEffect(() => {
    if (scrollPosition) {
          const element = document.getElementById(scrollPosition);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    }
    }, [scrollPosition, dispatch])

  return (
    <PageContainer>
      <Navbar setSearchQuery={setSearchQuery} setPage={setPage} setIncludedPages={setIncludedPages} />
      <Wrapper>
      <FeedWrapper data={data} isFeedsLoading={isFeedsLoading} />
      <UsersWrapper users={users}/>
      </Wrapper>
    </PageContainer>
  )
}

export default memo(ListFeedPage);
