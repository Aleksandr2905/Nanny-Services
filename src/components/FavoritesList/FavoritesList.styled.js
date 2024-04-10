import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 64px;
`;

export const ImgWrap = styled.div`
  display: flex;
  height: 100vh;
`;

export const Img = styled.img`
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
`;
