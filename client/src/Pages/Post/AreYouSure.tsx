import { useState } from "react";
import { MainDiv, ButtonDiv } from "./PostStyles";
import { Navigate } from "react-router-dom";

function AreYouSure(props: any) {
  const [upload, setUpload] = useState<boolean>(false);

  const handleNo = (e: any) => {
    e.preventDefault();
    props.setSure(!props.sure);
  };

  const handleYes = async (e: any) => {
    e.preventDefault();
    await props.upload();
    setUpload(!upload);
  };

  return (
    <MainDiv>
      <h1>Are you sure you want to upload?</h1>
      <ButtonDiv>
        <button onClick={handleYes}>Yes</button>
        <button onClick={handleNo}>No</button>
      </ButtonDiv>
      {upload ? <Navigate to="/" /> : <></>}
    </MainDiv>
  );
}

export default AreYouSure;
