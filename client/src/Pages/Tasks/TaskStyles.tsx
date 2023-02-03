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

export const Task = styled.h1`
  font-size: 2rem;
`;

export const Initials = styled.input`
  font-size: 2rem;
  width: 5rem;
  text-align: center;
  border: none;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e7dfe8;
  border-radius: 2rem;
  max-width: 50%;
  padding: 1rem 1.5rem;
`;

export const Big = styled.h1<Props>`
  font-size: 10rem;
  position: absolute;
  bottom: 0;
  /* border: 2px solid red; */
  ${({ choice }) => ({
    transition: `.3s`,
    transform: choice ? `rotate(45deg)` : ``,
  })}
`;

export const TaskForm = styled.form<Props>`
  background-color: #bba0ca;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 50rem;
  min-height: 15rem;
  bottom: 14%;
  left: 3%;
  opacity: 0;
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
