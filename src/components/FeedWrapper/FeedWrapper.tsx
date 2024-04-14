import React, {FC} from 'react'
import { Wrapper } from './FeedWrapper.style'
import Feed from '../Feed/Feed'

interface FeedWrapperProps{
data: any;
isFeedsLoading: boolean;
}

const FeedWrapper:FC<FeedWrapperProps> = ({data, isFeedsLoading}) => {
  return (
          <Wrapper>
      {data?.length ? (
        <div>
      <div className='feeds '>
        {data?.map((feed: any) => (
            <Feed
              feedData={feed}
              key={feed?.id}
            />
        ))}
            </div>
        </div>
      ) : isFeedsLoading ? (
        <h1 className='no_feeds'>Fetching Posts!</h1>
      ): (
        <h1 className='no_feeds'>There are no feeds!</h1>
      )}
    </Wrapper>
    //     <Wrapper>
    //   {data?.length ? (
    //     <div>
    //     {data?.map((movie: any) => (
    //         <div className='movieContainer' id={String(movie?.year)}>
    //           <div className='heading'>
    //          {movie?.year}
    //           </div>
    //           <div className='movies '>

    //       {/* {movie?.movies?.map((item: any) => (      
    
    //         <Movie
    //           movie={item}
    //           key={Math.floor(Math.random() * item.id * Date.now())}
    //         />
    //       ))} */}
    //         </div>
    //         </div>
    //     ))}

    //     </div>

    //   ) : (
    //     <h1 className='no_movies'>There are no search results for the post!</h1>
    //   )}
    // </Wrapper>

  )
}

export default FeedWrapper
