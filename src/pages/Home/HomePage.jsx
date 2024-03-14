import { Header } from "../../components/Header/Header";
import {
  Btn,
  Container,
  IconArrow,
  IconWrap,
  ImageBlock,
  InfoBlock,
  InfoBlockNumber,
  InfoBlockText,
  Text,
  Title,
  TitleWrap,
  Wrapper,
} from "./HomePage.styled";
import sprite from "../../assets/icons/sprite.svg";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Header />
        <TitleWrap>
          <Title>Make Life Easier for the Family:</Title>
          <Text>Find Babysitters Online for All Occasions</Text>
          <Btn type="button" onClick={() => navigate("nannies")}>
            Get started
            <IconArrow width={18} height={18}>
              <use href={`${sprite}#icon-Arrow-up`} />
            </IconArrow>
          </Btn>
        </TitleWrap>
        <ImageBlock>
          <InfoBlock>
            <IconWrap>
              <IconArrow width={30} height={30}>
                <use href={`${sprite}#icon-check`} />
              </IconArrow>
            </IconWrap>
            <div>
              <InfoBlockText>Experienced nannies</InfoBlockText>
              <InfoBlockNumber>15,000</InfoBlockNumber>
            </div>
          </InfoBlock>
        </ImageBlock>
      </Wrapper>
    </Container>
  );
};
