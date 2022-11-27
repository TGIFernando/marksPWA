import React from "react";
import {
  Background,
  MainBody,
  Loading as Load,
} from "../Pages/Schedule/ScheduleStyles";

function Loading() {
  return (
    <Background>
      <MainBody>
        <Load>Loading...</Load>
      </MainBody>
    </Background>
  );
}

export default Loading;
