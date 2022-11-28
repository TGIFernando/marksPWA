import { useState } from "react";
import { Navigate } from "react-router-dom";
import { MainDiv, ButtonDiv } from "./DeletePopIpStyles";
import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import env from "ts-react-dotenv";

function DeletePopUp(props: any) {
  const [del, setDel] = useState<boolean>(false);

  const handleNo = (e: any) => {
    props.setError(false);
  };

  const handleYes = async (e: any) => {
    await axiosWithAuth()
      .delete(`${env.API_URL}api/schedule/${props.id}`)
      .then(() => {
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
