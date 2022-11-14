import React from "react";

import { Background } from "./PostStyles";
import Burger from "../../Nav/Burger";
import PostCard from "./PostCard";

function Post() {
  return (
    <Background>
      <Burger />
      <PostCard />
    </Background>
  );
}

export default Post;
