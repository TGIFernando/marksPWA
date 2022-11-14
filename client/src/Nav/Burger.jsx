import React, { useState } from "react";
import styled from "styled-components";

import NavBar from "./NavBar";

const StyledBurger = styled.div`
  height: 1rem;
  width: 4.5rem;
  position: fixed;
  top: 15px;
  right: 2.5rem;
  z-index: 2;

  @media (min-width: 768px) {
    height: 4rem;
    width: 6.1rem;
  }

  div {
    width: 10rem;
    height: 0.5rem;
    background-color: ${({ open }) => (open ? "white" : "#687F90")};
    border-radius: 10px;
    transform-origin: 0;
    margin: 5px;
    transition: all 0.3s linear;
    @media (min-width: 768px) {
      height: 0.8rem;
    }

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(25.5deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-25.5deg)" : "rotate(0)")};
    }
  }
`;

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <NavBar open={open} setOpen={setOpen} />
    </>
  );
}

export default Burger;
