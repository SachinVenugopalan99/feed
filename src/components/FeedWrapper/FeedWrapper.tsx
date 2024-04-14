import React, {FC, useRef} from 'react'
import { Wrapper } from './FeedWrapper.style'
import Feed from '../Feed/Feed'
import { useVirtualizer } from '@tanstack/react-virtual';


interface FeedWrapperProps{
data: any;
isFeedsLoading: boolean;
}

const FeedWrapper:FC<FeedWrapperProps> = ({data, isFeedsLoading}) => {
  const parentRef = useRef(null);

    const virtualizer = useVirtualizer({
    count: data?.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35, // Estimate item height
    overscan: 5,
  });

  return (
          <Wrapper>
      {data?.length ? (
        <div>
      <div className='feeds' ref={parentRef}>
        {virtualizer?.getVirtualItems()?.map((feed: any) => (
            <Feed
              feedData={data[feed?.index]}
              key={data[feed?.index]?.id}
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
