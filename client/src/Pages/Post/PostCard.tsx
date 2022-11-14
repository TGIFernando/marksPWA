import React, { useState } from "react";

import { axiosWithAuth } from "../../Utility/AxiosWithAuth";

import {} from "./PostStyles";

function PostCard() {
  const [file, setFile] = useState<any>();
  const [title, setTitle] = useState<any>();
  const onFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };
  const onUpload = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", file, file.name);
    formData.append("title", title.title);
    // console.log(title);
    // for (const value of formData.values()) {
    //   console.log(value);
    // }

    //https://marks-scheduling.herokuapp.com/
    //${process.env.API_URL}
    axiosWithAuth()
      .post(`http://localhost:8000/api/schedule`, formData, {
        headers: { "Content-Type": "multipart/form-date" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const onTitleChange = (e: any) => {
    const { name, value } = e.target;
    setTitle({ ...title, [name]: value });
  };
  return (
    <form>
      <input type="text" name="title" onChange={onTitleChange} />
      <input type="file" name="img" onChange={onFileChange} />
      <button onClick={onUpload}>Upload</button>
    </form>
  );
}

export default PostCard;
