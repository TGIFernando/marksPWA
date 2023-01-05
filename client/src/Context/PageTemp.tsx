import React from "react";
import { MainDiv, Background } from "./GlobalStyles";
import Burger from "../Nav/Burger";

interface ParentCompProps {
  page?: React.ReactNode;
}

const PageTemp: React.FC<ParentCompProps> = (props) => {
  const { page } = props;
  return (
    <MainDiv>
      <Background>
        <Burger />
        <>{page}</>
      </Background>
    </MainDiv>
  );
};

export default PageTemp;
