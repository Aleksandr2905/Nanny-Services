import styled from "styled-components";
import image from "../../assets/image/bg.jpg";
import image2x from "../../assets/image/bg@2x.jpg";
import { variables } from "../../stylesheet/variables";

export const Container = styled.div`
  padding: 32px;
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  border-radius: 30px;
  overflow: hidden;
  background-color: ${variables.color.accent};
  background-image: url(${image});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
  min-height: 100%;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${image2x});
  }

  @media screen and (min-width: 768px) {
    background-size: auto 100%;
  }
`;

export const TitleWrap = styled.div`
  max-width: 100%;
  margin: auto 0 auto 32px;

  @media screen and (min-width: 768px) {
    max-width: 517px;
    margin: auto 0 auto 96px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 28px;
  font-family: ${variables.fonts.medium};
  font-size: 50px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${variables.color.textMainPage};

  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`;

export const Text = styled.p`
  font-family: ${variables.fonts.regular};
  font-size: 28px;
  font-weight: 400;
  line-height: 1.07;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
  color: ${variables.color.textMainPage};

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;
export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border: 1px solid ${variables.color.borderBtn};
  border-radius: 30px;
  padding: 18px;
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

  @media screen and (min-width: 768px) {
    padding: 18px 50px;
  }
`;

export const IconArrow = styled.svg`
  fill: ${variables.color.textMainPage};
`;

export const InfoBlock = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 20px;
  background-color: ${variables.color.bgSecondary};

  @media screen and (min-width: 768px) {
    bottom: 50px;
    right: 50px;
    width: 284px;
    height: 118px;
    padding: 32px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 13px;
  background: ${variables.color.accent};

  @media screen and (min-width: 768px) {
    width: 54px;
    height: 54px;
  }
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
