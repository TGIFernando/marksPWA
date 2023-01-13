import styled from "styled-components";

interface Props {
  complete: boolean;
  visible: boolean;
}

export const ListItem = styled.div<Pick<Props, "visible">>`
  font-size: 2rem;
  color: #f5f5f5;
  ${({ visible }) => ({
    display: visible ? `inline` : `none`,
  })}
  margin: .5rem 1rem;
  min-width: 100vw;
  text-align: center;
`;

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Strike = styled.div<Pick<Props, "complete">>`
  border: 2px solid grey;
  padding: 0.5rem 0;
  ${({ complete }) => ({
    textDecoration: complete ? `line-through` : `none`,
  })}
`;

// export const Strike = styled.div(({ complete }) => ({
//   textDecoration: complete ? `line-through` : `none`,
// }));
