import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../Atoms/UserState";
import Burger from "../../Nav/Burger";
import DeletePopUp from "../../Context/DeletePopUp/DeletePopUp";

import Loading from "../../Context/Loading";

import {
  MainBody,
  Dates,
  ScheduleContainer,
  Background,
  Heading,
} from "./ScheduleStyles";

function SchedulePortrait(props: any) {
  const admin = useRecoilValue(userState).admin;
  const [error, setError] = useState<boolean>(false);

  const handleDeletePopUp = (e: any) => {
    setError(!error);
  };

  return (
    <>
      <Background>
        <MainBody>
          <Burger />
          {props.img ? (
            <MainBody>
              {error ? (
                <DeletePopUp setError={setError} id={props.id} />
              ) : (
                <></>
              )}
              <Heading>{props.img.title}</Heading>
              <ScheduleContainer>
                <img
                  src={`data:image/png;base64,${props.img.img}`}
                  alt="schedule"
                />
              </ScheduleContainer>
              <Dates>{props.date}</Dates>
            </MainBody>
          ) : (
            <Loading />
          )}
          {admin ? (
            <>
              <button onClick={handleDeletePopUp}>Delete</button>
            </>
          ) : (
            <></>
          )}
        </MainBody>
      </Background>
    </>
  );
}

export default SchedulePortrait;
