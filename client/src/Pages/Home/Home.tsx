import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import { useRecoilState } from "recoil";
import { schedulePicturesState } from "../../Atoms/PictureState";

import HomePortrait from "./HomePortrait";
import Oops from "../Oops";
import Loading from "../../Context/Loading";

function Home() {
  const token = localStorage.getItem("token");
  const [pics, setPics] = useRecoilState(schedulePicturesState);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //https://marks-scheduling.herokuapp.com/
  //${process.env.API_URL}
  //http://localhost:8000/

  useEffect(() => {
    axiosWithAuth()
      .get(`https://marks-scheduling.herokuapp.com/api/schedule`)
      .then((res) => {
        setPics(res.data);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  return token ? (
    error ? (
      <Oops />
    ) : loading ? (
      <Loading />
    ) : (
      <HomePortrait pics={pics} />
    )
  ) : (
    <Navigate to="/login" replace />
  );
}

export default Home;
