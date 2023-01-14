import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import env from "ts-react-dotenv";

import SchedulePortrait from "./SchedulePortrait";
import Oops from "../../Context/Oops";

function Schedule() {
  const token = localStorage.getItem("token");
  const id = useParams().id;
  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;
  const [img, setImg] = useState(undefined);
  const [error, setError] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get(`${env.API_URL}api/schedule/${id}`)
      .then((res) => {
        setImg(res.data);
        setError(false);
      })
      .catch((_) => {
        setError(true);
      });
  }, [id]);

  return token ? (
    error ? (
      <Oops />
    ) : (
      <SchedulePortrait img={img} date={date} token={token} id={id} />
    )
  ) : (
    <Navigate to="/login" replace />
  );
}

export default Schedule;
