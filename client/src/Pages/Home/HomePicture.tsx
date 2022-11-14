import React from "react";
import { Link } from "react-router-dom";
import { Simg, Title, Wrapper } from "./HomeStyles";

function HomePicture(props: any) {
  const id = props.pic.id;
  return (
    <Wrapper>
      <Link
        to={`/schedule/${id}`}
        replace
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Simg
          key={props.pic.id}
          src={`data:image/png;base64,${props.pic.img}`}
          style={props.style}
        />
      </Link>
      <Title>{props.pic.title}</Title>
    </Wrapper>
  );
}

export default HomePicture;
