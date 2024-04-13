import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  background: var(--navbar-color);
`;

export const Content = styled.div`
    position: relative;
    max-width: 500px;
    width: 100%;
    height: 45px;
    background: var(--searchbar-color);
    border-radius: 40px;
    color: var(--white);

    img{
        position: absolute;
        left: 17px;
        top: 10px;
        width: 25px;
    }
    input{
        padding: 0 0 0 60px;
        width: 100%;
        height: 45px;
        border: 0;
        background: transparent;
        border-radius: 40px;
        color: black;
    border: 1px solid var(--border-color);

        :focus{
            outline: none;
        }

    }
`;