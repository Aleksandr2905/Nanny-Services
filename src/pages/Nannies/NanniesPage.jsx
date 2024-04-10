import { Header } from "../../components/Header/Header";
import { NanniesList } from "../../components/NanniesList/NanniesList";
import * as s from "./NanniesPage.styled";

export const NanniesPage = () => {
  return (
    <s.Wrapper>
      <s.Container>
        <Header backgroundColor />
        <NanniesList />
      </s.Container>
    </s.Wrapper>
  );
};
