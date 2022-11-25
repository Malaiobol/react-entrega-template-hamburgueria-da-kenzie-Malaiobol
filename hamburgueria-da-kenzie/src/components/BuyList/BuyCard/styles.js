import styled from "styled-components";

export const StyledBuyCard = styled.li`
  display: flex;

  width: 350px;
  height: 80;

  border: solid 2px var(--colorGrey20);
  border-radius: 5px;

  margin-bottom: 10px;

  div {
    width: 80px;
    height: 100%;

    background-color: var(--colorGrey0);
  }

  .separator {
    background-color: transparent;
  }

  div > img {
    margin: 5px;
    max-width: 65px;
    max-height: 65px;
  }

  .separator {
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
    color: var(--colorGrey20);

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
`;
