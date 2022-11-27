import styled from "styled-components";

export const Background = styled.div`
  background-color: #0d060f;
  min-height: 100vh;
`;

export const PicBackground = styled.div`
  background-color: #0d060f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
`;

export const Heading = styled.h1`
  color: white;
  font-size: 2.5rem;
`;

export const Dates = styled.h2`
  color: white;
  font-size: 1.5rem;
`;

export const LogoutButton = styled.button`
  height: 5vh;
  width: 100vw;
  background-color: #541010;
  padding: 0 0 0 0;
  border: none;
  font-size: 1.5em;
  color: White;
  &:active {
    /* transition: 0.05s; */
    background-color: 0d060f;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ScheduleContainer = styled.picture``;

export const Picture = styled.img``;

export const DownloadBttn = styled.div`
  font-size: 2rem;
  color: white;
  text-align: right;
  color: black;
  border: 2px solid red;
  position: absolute;
  bottom: 42%;
  /* width: 100vw; */
  padding: 0.25rem;
  left: 75%;
  &:active {
    /* transition: 0.05s; */
    background-color: 0d060f;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Loading = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;
