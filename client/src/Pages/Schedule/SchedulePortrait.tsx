import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../Atoms/UserState";
import Burger from "../../Nav/Burger";
import DeletePopUp from "../DeletePopUp/DeletePopUp";
import {
  MainBody,
  Dates,
  ScheduleContainer,
  Background,
  Loading,
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
            <div>
              <Loading>Loading...</Loading>
            </div>
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
