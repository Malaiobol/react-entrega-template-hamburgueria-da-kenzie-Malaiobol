import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  background-color: var(--colorGrey0);
  width: 100%;
  height: 80px;
  gap: 45%;

  .logo {
    margin-top: 1.5%;
    margin-left: 10%;
  }

  .searchDiv {
    margin-top: 0.5%;
    width: 365px;
    height: 60px;
  }

  input {
    width: 100%;
    height: 100%;

    border: solid 2px var(--colorGrey0);
    border-radius: 8px;
  }

  input::placeholder {
    padding-left: 10%;
  }

  button {
    position: relative;
    bottom: 50px;
    left: 75%;
  }
`;
