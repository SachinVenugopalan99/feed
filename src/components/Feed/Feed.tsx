import React, {FC, useCallback} from 'react'
import { MainWrapper } from './Feed.style';
import Avatar from '../Avatar/Avatar';
import { formatDate } from '../../utils/util';
import defaultBackground from '../../assets/background.svg';
import { useNavigate } from 'react-router-dom';
import { PAGE } from '../../utils/constants';
import backButton from '../../assets/back.svg';
import { useDispatch } from '../../store';
import feedRedux from '../../store/modules/feed';

interface FeedProps{
 feedData: any;
 showBackButton?: boolean;
}

const Feed:FC<FeedProps> = ({feedData, showBackButton=false}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
  navigate(PAGE.DETAILS.PATH(feedData?.id));
  }, [feedData, navigate])

  const handleBack = useCallback(() => {
   dispatch(feedRedux.actions.scrollPosition(window.pageYOffset));
   navigate(-1);
  }, [navigate, dispatch])

  return (
    <MainWrapper onClick={handleClick}>
      {showBackButton ? 
      <div role='button' className='backButton' onClick={() => handleBack()}>
        <img src={backButton} alt='back'/>
        Back
      </div>
      : null}
    <div className='wrapper'>
        <Avatar imgSrc={feedData?.author?.profilePictureUrl} userName={feedData?.author?.name}/>
        <div className='feedWrapper'>
         <h3>{feedData?.author?.name}</h3>
         <h6 className='timeText'>{formatDate(feedData?.createdAt)}</h6>
         <p className='contentText'>{feedData?.text}</p>
         {feedData?.attachments?.length ? (
          <div className='imgContainer'>
        {feedData?.attachments?.[0]?.type === 'image' ? 
          (
          <img className={feedData?.attachments?.length === 1 ? 'single_image' : ''} src={feedData?.attachments?.[0]?.url || defaultBackground} loading='lazy' alt="First" width={feedData?.attachments?.length > 1 ? '50%' : '100%'} />
          )  : (
          <video className={`videoimg ${feedData?.attachments?.length === 1 ? 'single_video' : ''}`} src={feedData?.attachments?.[0]?.url} controls width={feedData?.attachments?.length > 1 ? '50%' : '100%'}/> 
          )
          } 
          {feedData?.attachments?.length > 1 ? 
           <div className='imgBox'>
            <>
          {feedData?.attachments?.[1]?.type === 'image' ? 
          (
          <img src={feedData?.attachments?.[1]?.url || defaultBackground} loading='lazy' alt="Second" width='100%' height={feedData?.attachments?.length > 2 ? '50%' : '100%'} />
          )  : (
          <video className='videoimg' src={feedData?.attachments?.[1]?.url} controls width='100%' height={feedData?.attachments?.length > 2 ? '50%' : '100%'}/> 
          )
          } 
          {feedData?.attachments?.[2] ? 
          feedData?.attachments?.[2]?.type === 'image' ? 
          (
          <img src={feedData?.attachments?.[2]?.url || defaultBackground} loading='lazy' alt="Second" width='100%' height='50%' />
          )  : (
          <video className='videoimg' src={feedData?.attachments?.[2]?.url} controls width='100%' height='50%' /> 
          )
           : null}
          </>
            </div>   
            : null}     
        </div>
             ) : null}
        </div>
    </div>
  </MainWrapper>
  )
}

export default Feed
