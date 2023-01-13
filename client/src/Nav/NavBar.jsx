import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../Atoms/UserState";
import styled from "styled-components";

import { Navigate, Link } from "react-router-dom";

const OL = styled.ol`
  list-style: none;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50vw;
  background-color: #687f90;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: 0.3s ease-in-out;
`;

const LI = styled.li`
  padding: 10px;
  font-size: 3.5rem;
  color: white;
  text-align: center;
  a {
    text-decoration: none;
    color: white;
  }
  @media (min-width: 768px) {
    font-size: 8rem;
  }
`;

function NavBar({ open, setOpen }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [myUser, setMyUser] = useRecoilState(userState);

  const logOut = (e) => {
    e.preventDefault();
    setMyUser([]);
    localStorage.removeItem("token");
    setToken(undefined);
  };

  const onClick = () => {
    setOpen(!open);
  };

  return token ? (
    myUser.admin ? (
      <nav>
        <OL open={open}>
          <LI onClick={onClick}>
            <h1 onClick={logOut}>Log Out</h1>
          </LI>
          <LI onClick={onClick}>
            <Link to="/" replace>
              Home
            </Link>
          </LI>
          {/* <Link to="/Resume.PDF" target="_blank" download>
            Download Resume
          </Link> */}
          <LI onClick={onClick}>
            <Link to="/todoadmin" replace>
              To Do's Admin
            </Link>
          </LI>
          <LI onClick={onClick}>
            <Link to="/todo" replace>
              To Do's
            </Link>
          </LI>
          <LI onClick={onClick}>
            <Link to="/post" replace>
              Post
            </Link>
          </LI>
        </OL>
      </nav>
    ) : (
      <nav>
        <OL open={open}>
          <LI onClick={onClick}>
            <h1 onClick={logOut}>Log Out</h1>
          </LI>
          <LI onClick={onClick}>
            <Link to="/" replace>
              Home
            </Link>
          </LI>
          <LI onClick={onClick}>
            <Link to="/todo" replace>
              To Do's
            </Link>
          </LI>
        </OL>
      </nav>
    )
  ) : (
    <Navigate to="/login" replace />
  );
}

export default NavBar;
