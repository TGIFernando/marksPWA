import styled from "styled-components";

export const Background = styled.div`
  background-color: #0d060f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.input`
  height: 5rem;
  width: 25rem;
  border-radius: 2rem;
  border-color: none;
  border: 5px solid white;
  background-color: 255, 255, 255;
  margin: 2rem;
  &::placeholder {
    font-size: 2rem;
    text-align: center;
  }
  &:focus {
    outline: none;
    opacity: 80%;
  }
`;

export const ImageInput = styled.input`
  margin-left: 8rem;
  /* margin: 2rem; */
`;

export const Upload = styled.button`
  border-radius: 2rem;
  border: 5px solid white;
  font-size: 2rem;
  margin-top: 1rem;
`;

export const MainDiv = styled.div`
  position: absolute;
  padding: 2rem;
  background-color: rgba(61, 18, 66, 0.5);
  color: white;
  font-size: 2rem;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
