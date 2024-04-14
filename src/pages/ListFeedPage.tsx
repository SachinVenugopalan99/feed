import PageContainer from '../components/PageContainer/PageContainer';
import Navbar from '../components/Navbar/Navbar';
import FeedWrapper from '../components/FeedWrapper/FeedWrapper';
import { useFetchFeedPost } from '../hooks/useFetchFeedPosts';
import UsersWrapper from '../components/UsersWrapper/UsersWrapper';
import { Wrapper } from './ListFeedPage.style';

const ListFeedPage = () => {
  const {data, setSearchQuery, setPage, isFeedsLoading, users} = useFetchFeedPost()

  return (
    <PageContainer>
      <Navbar setSearchQuery={setSearchQuery} setPage={setPage} />
      <Wrapper>
      <FeedWrapper data={data} isFeedsLoading={isFeedsLoading}/>
      <UsersWrapper users={users}/>
      </Wrapper>
    </PageContainer>
  )
}

export default ListFeedPage
