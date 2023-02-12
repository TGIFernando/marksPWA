import styled from "styled-components";

interface Props {
  choice: boolean;
}

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li`
  font-size: 2rem;
  color: #201d1e;
`;

/// Task Card ///

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e7dfe8;
  border-radius: 2rem;
  max-width: 50%;
  padding: 1rem 1.5rem;
`;

export const Task = styled.h1`
  font-size: 2rem;
`;

export const Initials = styled.input`
  font-size: 2rem;
  width: 5rem;
  text-align: center;
  border: none;
`;

export const Icon = styled.div`
  /* border: 2px solid red; */
  font-size: 2rem;
  padding: 0 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/// Post Task Card

export const Big = styled.h1<Props>`
  font-size: 10rem;
  position: fixed;
  bottom: 0;
  /* border: 2px solid red; */
  ${({ choice }) => ({
    transition: `.3s`,
    transform: choice ? `rotate(45deg)` : ``,
  })}
`;

export const TaskForm = styled.form<Props>`
  background-color: #bba0ca;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 30rem;
  min-height: 20rem;
  bottom: 15%;
  left: 5.5%;
  opacity: 0;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 3px 2px #4d335b;
  ${({ choice }) => ({
    transition: `.3s ease-in`,
    opacity: choice ? `100` : `0`,
  })}
`;

export const Label = styled.label`
  font-size: 2rem;
`;

export const FormInput = styled.input`
  min-width: 25rem;
  min-height: 2.5rem;
`;

///

export const TaskContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 0 3rem;
  /* align-items: center; */
  /* justify-content: center; */
`;

export const MainDiv = styled.div`
  /* border: 2px solid red; */
`;
