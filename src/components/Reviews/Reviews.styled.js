import styled from "styled-components";
import { variables } from "../../stylesheet/variables";

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 48px;
`;

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ReviewWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  padding: 14px 15px;
  border-radius: 100px;
  width: 44px;
  height: 44px;
  font-family: ${variables.fonts.medium};
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: ${variables.color.accent};
  background-color: ${variables.color.accentLight};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Reviewer = styled.p`
  font-family: ${variables.fonts.medium};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: ${variables.color.textPrimary};
`;

export const RatingWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconStar = styled.svg`
  fill: ${variables.color.iconStar};
`;

export const Rating = styled.p`
  font-family: ${variables.fonts.medium};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: ${variables.color.textPrimary};
`;

export const Comment = styled.p`
  font-family: ${variables.fonts.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: ${variables.color.textSecondary};
`;

export const Button = styled.button`
  border-radius: 30px;
  padding: 14px 28px;
  width: 215px;
  height: 48px;
  margin-top: 37px;
  outline: none;
  border: none;
  font-family: ${variables.fonts.medium};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  transition: ${variables.animations.transition};
  color: ${variables.color.textMainPage};
  background-color: ${variables.color.accent};

  &:hover {
    box-shadow: 0px 4px 14px 0px ${variables.color.textSecondary};
    color: ${variables.color.accent};
    background-color: ${variables.color.textMainPage};
  }
`;
