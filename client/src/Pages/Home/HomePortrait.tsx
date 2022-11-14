import React from "react";
import Burger from "../../Nav/Burger";
import { Background, MainDiv } from "./HomeStyles";
import HomePicture from "./HomePicture";

function HomePortrait(props: any) {
  return (
    <Background>
      <Burger />
      <MainDiv>
        {props.pics.map((pic: any) => {
          return <HomePicture pic={pic} key={pic.id} />;
        })}
      </MainDiv>
    </Background>
  );
}

export default HomePortrait;
