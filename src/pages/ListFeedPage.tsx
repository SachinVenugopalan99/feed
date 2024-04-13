import React, {useState, useEffect} from 'react'
import PageContainer from '../components/PageContainer/PageContainer';
import Navbar from '../components/Navbar/Navbar';
import FeedWrapper from '../components/FeedWrapper/FeedWrapper';
import { useFetchFeedPost } from '../hooks/useFetchFeedPosts';

const ListFeedPage = () => {

  const {data, searchQuery, setSearchQuery} = useFetchFeedPost()

  return (
    <PageContainer>
      <Navbar setSearchQuery={setSearchQuery}/>
      <FeedWrapper searchQuery={searchQuery} data={data}/>
    </PageContainer>
  )
}

export default ListFeedPage
