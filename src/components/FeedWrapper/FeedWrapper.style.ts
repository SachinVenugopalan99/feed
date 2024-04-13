import styled from "styled-components";

export const Wrapper = styled.main`
  margin-top: 80px;
  height: 100%;
  width:45%;
  min-width: 600px;
  background: var(--feed-color);
  border-radius: 30px;

    @media (max-width: 600px) {
    min-width: 100%;
    width: 100%;
    }

  .movieContainer{
    margin-top: 10px;
    padding: 10px;
  }
  .heading {
    font-size: 1.5em;
    font-weight: 400;
    padding: 30px 0;
    display: flex;
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 20px;
    min-height: 90vh;
  }

  .no_movies {
    text-align: center;
    margin-top: 70px;
    font-weight: 400;
    font-size: 1.2em;
    height: 90vh;
    display: flex;
    align-items:center;
    justify-content: center;
  }
`;