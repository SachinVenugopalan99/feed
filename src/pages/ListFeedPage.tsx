import React, {useEffect, Fragment, useCallback} from 'react';
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
    if (scrollPosition) {
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
          })
      // dispatch(feedRedux.actions.stopFecthing(false));
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

export default ListFeedPage
