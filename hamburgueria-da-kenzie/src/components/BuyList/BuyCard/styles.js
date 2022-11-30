import styled from "styled-components";

export const StyledBuyCard = styled.li`
  display: flex;

  width: 350px;
  height: 80;

  margin-bottom: 10px;

  div {
    width: 80px;
    height: 100%;

    background-color: var(--colorGrey0);
  }

  div > img {
    margin: 5px;
    max-width: 65px;
    max-height: 65px;
  }

  span {
    margin-left: 10px;
    width: 50%;
    margin-top: 5%;
  }

  h5 {
    color: var(--colorGrey100);

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 24px;
  }

  small {
    color: var(--colorGrey50);

    font-weight: 400;
    font-size: 0.75rem;
    line-height: 16px;
  }

  button {
    color: var(--colorGrey4);

    font-weight: 500;
    font-size: 0.75rem;
    line-height: 14px;
  }
  button:hover {
    cursor: pointer;

    color: var(--colorGrey50);
  }
`;
