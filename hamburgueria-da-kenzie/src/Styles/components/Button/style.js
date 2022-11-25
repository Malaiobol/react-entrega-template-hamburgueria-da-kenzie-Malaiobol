import styled from "styled-components";

export const StyledButton = styled.button`
  color: var(--colorWhiteFixed);

  border: solid 2px var(--colorPrimary);
  border-radius: 8px;

  background-color: var(--colorPrimary);

  padding: 11px 20px;

  :hover {
    cursor: pointer;
    background-color: var(--colorHalfPrimary);
    border: solid 2px var(--colorHalfPrimary);
  }
`;
