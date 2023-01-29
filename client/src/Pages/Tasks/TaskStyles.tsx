import styled from "styled-components";

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

export const Initials = styled.h2`
  font-size: 2rem;
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
