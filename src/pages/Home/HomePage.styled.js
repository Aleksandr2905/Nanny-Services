import styled from "styled-components";
import image from "../../assets/image/bg.jpg";
import { variables } from "../../stylesheet/variables";

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
  background-color: ${variables.color.accent};
`;

export const TitleWrap = styled.div`
  /* display: flex;
flex-direction: column; */
  max-width: 517px;
  margin: auto;
`;

export const Title = styled.h1`
  margin-bottom: 28px;
  font-family: ${variables.fonts.medium};
  font-size: 70px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${variables.color.textMainPage};
`;

export const Text = styled.p`
  font-family: ${variables.fonts.regular};
  font-size: 28px;
  font-weight: 400;
  line-height: 1.07;
  letter-spacing: -0.02em;
  margin-bottom: 64px;
  color: ${variables.color.textMainPage};
`;
export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border: 1px solid ${variables.color.borderBtn};
  border-radius: 30px;
  padding: 18px 50px;
  font-family: ${variables.fonts.medium};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.01em;
  background-color: transparent;
  color: ${variables.color.bgSecondary};

  &:hover {
    transition: all 0.3s;
    background-color: ${variables.color.bgSecondary};
    color: ${variables.color.accent};
    svg {
      transition: transform 0.3s;
      transform: rotate(53deg);
      fill: ${variables.color.accent};
    }
  }
`;

export const IconArrow = styled.svg`
  fill: ${variables.color.textMainPage};
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
  background-color: ${variables.color.bgSecondary};
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 13px;
  background: ${variables.color.accent};
`;

export const InfoBlockText = styled.p`
  margin-bottom: 6px;
  font-family: ${variables.fonts.regular};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.3px;
  color: ${variables.color.textSecondary};
`;

export const InfoBlockNumber = styled.p`
  font-family: ${variables.fonts.bold};
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  color: ${variables.color.textPrimary};
`;
