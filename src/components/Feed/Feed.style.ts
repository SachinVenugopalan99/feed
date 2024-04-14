import styled from "styled-components";

export const Wrapper = styled.main`
  padding: 20px;
  display: flex;
  gap:20px;  
  background: var(--feed-color);
  border-radius: 30px;
  width: 100%;

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
  `