import styled from "styled-components";
import image from "../../assets/image/bg.jpg";

export const Container = styled.div`
  padding: 32px;
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  /* min-height: calc(100vh - 56px); */
  min-height: 100%;
  border-radius: 30px;
  background-color: var(--background-color);
`;

export const TitleWrap = styled.div`
  /* display: flex;
flex-direction: column; */
  max-width: 517px;
  margin: auto;
`;

export const Title = styled.h1`
  margin-bottom: 28px;
  font-size: 70px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #fbfbfb;
`;

export const Text = styled.p`
  font-size: 28px;
  font-weight: 400;
  line-height: 1.07;
  letter-spacing: -0.02em;
  margin-bottom: 64px;
  color: #fbfbfb;
`;
export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  border-radius: 30px;
  padding: 18px 50px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.01em;
  background-color: transparent;
  color: #fbfbfb;

  &:hover {
    transition: all 0.3s;
    background-color: #fbfbfb;
    color: var(--background-color);
    svg {
      transition: transform 0.3s;
      transform: rotate(53deg);
      fill: var(--background-color);
    }
  }
`;

export const IconArrow = styled.svg`
  fill: #fbfbfb;
`;

export const ImageBlock = styled.div`
  /* position: relative; */
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 30px 30px 0;
  width: 50%;
  min-height: 100%;
`;

export const InfoBlock = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 284px;
  height: 118px;
  padding: 32px;
  border-radius: 20px;
  background-color: #fbfbfb;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 13px;
  background: var(--background-color);
`;

export const InfoBlockText = styled.p`
  margin-bottom: 6px;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.3px;
  color: rgba(17, 16, 28, 0.5);
`;

export const InfoBlockNumber = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  color: #11101c;
`;
