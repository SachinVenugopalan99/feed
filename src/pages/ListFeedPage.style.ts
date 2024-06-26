import styled from "styled-components";

export const Wrapper = styled.main`
  height: 100%;
  width:100%;
  display: flex;
  justify-content: center;
  gap: 30px;

  .detailWrapper {
    display: flex;
  justify-content: center;
  gap: 30px;
    margin-top: 80px;
  width:45%;
  min-width: 600px;
  height: 90vh;

  @media (max-width: 600px) {
    min-width: 100%;
    width: 100%;
    padding: 0px 10px;
    }
  }
  `;