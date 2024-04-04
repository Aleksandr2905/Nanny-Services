import { useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";
import { NanniesList } from "../../components/NanniesList/NanniesList";

export const NanniesPage = () => {
  return (
    <>
      <div>
        <Header backgroundColor />
        <NanniesList />
      </div>
    </>
  );
};
