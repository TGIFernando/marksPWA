import styled from "styled-components";

export const Background = styled.form`
  /* background-color: #ffead0; */
  background-color: #0d060f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.input`
  margin: 0.5rem;
  width: 70vw;
  height: 5rem;
  border-radius: 3rem;
  border: 5px solid white;
  background-color: #0d060f;
  padding: 0 1rem;
  opacity: 100%;
  color: white;
  &:focus {
    outline: none;
    opacity: 80%;
  }
  &::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  margin: 0.5rem;
  width: 25vw;
  height: 3rem;
  border-radius: 3rem;
  border: 5px solid white;
  color: white;
  background-color: #0d060f;
  &:active {
    transition: 0.05s;
    background-color: white;
    color: #0d060f;
  }
`;

export const Wrong = styled.div`
  color: #ff7d7d;
  font-size: 2rem;
  position: absolute;
  top: 5%;
`;
