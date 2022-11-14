import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import { useParams } from "react-router-dom";

import SchedulePortrait from "./SchedulePortrait";
import Oops from "../Oops";

function Schedule() {
  const token = localStorage.getItem("token");
  const id = useParams().id;
  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;
  const [img, setImg] = useState(undefined);
  const [error, setError] = useState(false);

  //https://marks-scheduling.herokuapp.com/
  //${process.env.API_URL}
  //http://localhost:8000/

  useEffect(() => {
    axiosWithAuth()
      .get(`https://marks-scheduling.herokuapp.com/api/schedule/${id}`)
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
