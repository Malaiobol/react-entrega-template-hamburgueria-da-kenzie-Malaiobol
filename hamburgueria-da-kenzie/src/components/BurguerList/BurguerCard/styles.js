import styled from "styled-components";

export const StyledBurguerCard = styled.li`
  width: 300px;
  height: 350px;

  border: solid 2px var(--colorGrey20);
  border-radius: 5px;

  div {
    width: 100%;
    height: 150px;

    background-color: var(--colorGrey0);
  }

  div > img {
    margin-left: 71px;
  }

  h4,
  small,
  p {
    padding: 20px;
  }

  button {
    margin-left: 20px;
  }

  h4 {
    color: var(--colorGrey100);

    font-weight: 700;
    font-size: 1.125rem;
    line-height: 24px;
  }

  small {
    color: var(--colorGrey20);

    font-weight: 400;
    font-size: 1rem;
    line-height: 16px;
  }

  p {
    color: var(--colorPrimary);

    font-weight: 600;
    font-size: 0.875rem;
    line-height: 24px;
  }
`;
