import styled from "styled-components";

export const Wrapper = styled.main`
  top: 80px;
  width:20%;
  position: sticky;
  max-width: 300px;
  height: calc(100vh - 100px);
  overflow: auto;
  background: var(--feed-color);
  border-radius: 30px;
  padding: 20px;

  @media (max-width: 900px) {
    display: none;
    }

    .userWrapper{
     display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15px;
    align-items: start;
    }
    .user{
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .no_users{
      height: 100%;
      display: flex;
    align-items: center;
    justify-content: center;
    }

`;