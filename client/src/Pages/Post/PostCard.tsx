import React, { useState } from "react";
import { axiosWithAuth } from "../../Utility/AxiosWithAuth";

import { Form, Title, ImageInput, Upload } from "./PostStyles";
import AreYouSure from "./AreYouSure";

function PostCard() {
  const [file, setFile] = useState<any>();
  const [title, setTitle] = useState<any>();
  const [sure, setSure] = useState<boolean>(false);
  const onFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };
  const onUpload = (e: any) => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("img", file, file.name);
    formData.append("title", title.title);
    // console.log(title);
    // for (const value of formData.values()) {
    //   console.log(value);
    // }

    //https://marks-scheduling.herokuapp.com/
    //${process.env.API_URL}
    //http://localhost:8000/

    axiosWithAuth()
      .post(`https://marks-scheduling.herokuapp.com/api/schedule`, formData, {
        headers: { "Content-Type": "multipart/form-date" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleUpload = (e: any) => {
    e.preventDefault();
    setSure(!sure);
  };

  const onTitleChange = (e: any) => {
    const { name, value } = e.target;
    setTitle({ ...title, [name]: value });
  };
  return (
    <Form>
      <Title
        type="text"
        name="title"
        onChange={onTitleChange}
        placeholder="Title of img"
      />
      <ImageInput
        type="file"
        name="img"
        id="imgUpload"
        title="Select a file"
        onChange={onFileChange}
      />
      {sure ? (
        <AreYouSure upload={onUpload} setSure={setSure} sure={sure} />
      ) : (
        <></>
      )}
      <Upload onClick={handleUpload}>Upload</Upload>
    </Form>
  );
}

export default PostCard;
