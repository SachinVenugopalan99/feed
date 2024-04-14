import React, {useEffect} from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import Navbar from '../../components/Navbar/Navbar';
import { DetailWrapper } from './DetailsPage.style';
import Feed from '../../components/Feed/Feed';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../store';
import feedRedux from '../../store/modules/feed';

const DetailsPage = () => {

  const dispatch = useDispatch();
  const rootState = useSelector((state) => state);
  const {id} = useParams();

    const feedById = feedRedux.getters.feedById(rootState);

  useEffect(() => {
        if (id) {
        dispatch(feedRedux.actions.feedById(id))
        }
    }, [dispatch, id])

  return (
    <PageContainer>
    <Navbar hideSearch={true}/>
        <DetailWrapper>
          <Feed feedData={feedById} showBackButton={true} />
        </DetailWrapper>
    </PageContainer>
  )
}

export default DetailsPage
