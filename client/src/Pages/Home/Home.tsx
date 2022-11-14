import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import { useRecoilState } from "recoil";
import { schedulePicturesState } from "../../Atoms/PictureState";

import HomePortrait from "./HomePortrait";
import Oops from "../Oops";

function Home() {
  const token = localStorage.getItem("token");
  const [pics, setPics] = useRecoilState(schedulePicturesState);
  const [error, setError] = useState(false);

  //https://marks-scheduling.herokuapp.com/
  //${process.env.API_URL}
  //http://localhost:8000/

  useEffect(() => {
    axiosWithAuth()
      .get(`https://marks-scheduling.herokuapp.com/api/schedule`)
      .then((res) => {
        setPics(res.data);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  return token ? (
    error ? (
      <Oops />
    ) : (
      <HomePortrait pics={pics} />
    )
  ) : (
    <Navigate to="/login" replace />
  );
}

export default Home;
