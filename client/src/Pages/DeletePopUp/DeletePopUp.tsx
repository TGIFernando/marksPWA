import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { MainDiv, ButtonDiv } from "./DeletePopIpStyles";
import { axiosWithAuth } from "../../Utility/AxiosWithAuth";

function DeletePopUp(props: any) {
  const [del, setDel] = useState<boolean>(false);

  const handleNo = (e: any) => {
    props.setError(false);
  };

  //https://marks-scheduling.herokuapp.com/
  //http://localhost:8000/

  const handleYes = (e: any) => {
    axiosWithAuth()
      .delete(`https://marks-scheduling.herokuapp.com/api/schedule/${props.id}`)
      .then((res) => {
        setDel(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <MainDiv>
      {del ? <Navigate to="/" /> : <></>}
      <h1>Are you sure you want to delete?</h1>
      <ButtonDiv>
        <button onClick={handleYes}>Yes</button>
        <button onClick={handleNo}>No</button>
      </ButtonDiv>
    </MainDiv>
  );
}

export default DeletePopUp;
