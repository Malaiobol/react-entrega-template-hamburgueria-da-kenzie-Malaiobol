import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  background-color: var(--colorGrey0);
  width: 100%;
  height: 80px;
  gap: 45%;

  form {
    margin-top: 0.5%;
    width: 365px;
    height: 60px;
  }
  div {
    margin-top: 30px;
    margin-left: 10%;
  }
  input {
    width: 100%;
    height: 100%;

    border: solid 2px var(--colorGrey20);
    border-radius: 8px;
  }

  input::placeholder {
    padding-left: 10%;
  }

  button {
    position: relative;
    bottom: 50px;
    left: 68%;

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
  }
`;
