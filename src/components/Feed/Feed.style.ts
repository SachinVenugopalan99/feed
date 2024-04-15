import styled from "styled-components";

export const MainWrapper = styled.main`

  padding: 20px;
  background: var(--feed-color);
  border-radius: 30px;
  width: 100%;
  height: fit-content;
  cursor: pointer;

  .backButton{
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 20px;
  }

.wrapper{
    display: flex;
      gap:20px;  
  width: 100%;
  height: fit-content;

  .feedWrapper{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: start;
  }
  .timeText{
    color: grey;
  }
  .contentText{
    text-align: start;
  }
  .imgContainer {
    display: flex;
    height: 300px;
    object-fit: cover;
    gap: 5px;
    background: var(--bg-color);
  }
  .imgBox{
    height: 300px;
    width: 50%;
    gap: 5px;
    display: flex;
    flex-direction: column;
  }
  .videoimg{
    object-fit: cover;
  }

   @media (max-width: 600px) {
    .imgContainer {
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 100%;

    img{
      width: 100%;
      height: 50%;
    }
    video{
      width: 100%;
      height: 50%;
    }
    .single_image {
      height: 100%;
    }
    .single_video {
     height: 100%;
    }
    }
      .imgBox{
    width: 100%;
    gap: 5px;
    display: flex;
    flex-direction: row;
    img{
      width: 50%;
      height: 100%
    }
    video{
      width: 50%;
      height: 100%
    }
  }
    }
  }
  `