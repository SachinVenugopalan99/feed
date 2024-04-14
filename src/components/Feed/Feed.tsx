import React, {FC} from 'react'
import { Wrapper } from './Feed.style';
import Avatar from '../Avatar/Avatar';
import { formatDate } from '../../utils/util';
import defaultBackground from '../../assets/background.svg';

interface FeedProps{
 feedData: any;
}

const Feed:FC<FeedProps> = ({feedData}) => {
  return (
    <Wrapper>
        <Avatar imgSrc={feedData?.author?.profilePictureUrl} userName={feedData?.author?.name}/>
        <div className='feedWrapper'>
         <h3>{feedData?.author?.name}</h3>
         <h6 className='timeText'>{formatDate(feedData?.createdAt)}</h6>
         <p className='contentText'>{feedData?.text}</p>
         {feedData?.attachments?.length ? (
          <div className='imgContainer'>
        {feedData?.attachments?.[0]?.type === 'image' ? 
          (
          <img src={feedData?.attachments?.[0]?.url || defaultBackground} loading='lazy' alt="First" width={feedData?.attachments?.length > 1 ? '50%' : '100%'} />
          )  : (
          <video className='videoimg' src={feedData?.attachments?.[0]?.url} controls width={feedData?.attachments?.length > 1 ? '50%' : '100%'}/> 
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
    </Wrapper>
  )
}

export default Feed
