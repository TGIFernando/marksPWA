import React from "react";
import { Background, PicBackground, Loading } from "./Schedule/ScheduleStyles";

function Oops() {
  return (
    <Background>
      <PicBackground>
        <Loading>Something went wrong try again later</Loading>
      </PicBackground>
    </Background>
  );
}

export default Oops;
