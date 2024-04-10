import { Header } from "../../components/Header/Header";
import * as s from "./HomePage.styled";
import sprite from "../../assets/icons/sprite.svg";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <s.Container>
        <s.Wrapper>
          <s.TitleWrap>
            <s.Title>Make Life Easier for the Family:</s.Title>
            <s.Text>Find Babysitters Online for All Occasions</s.Text>
            <s.Btn type="button" onClick={() => navigate("nannies")}>
              Get started
              <s.IconArrow width={18} height={18}>
                <use href={`${sprite}#icon-Arrow-up`} />
              </s.IconArrow>
            </s.Btn>
          </s.TitleWrap>
          <s.InfoBlock>
            <s.IconWrap>
              <s.IconArrow width={30} height={30}>
                <use href={`${sprite}#icon-check`} />
              </s.IconArrow>
            </s.IconWrap>
            <div>
              <s.InfoBlockText>Experienced nannies</s.InfoBlockText>
              <s.InfoBlockNumber>15,000</s.InfoBlockNumber>
            </div>
          </s.InfoBlock>
        </s.Wrapper>
      </s.Container>
    </>
  );
};
