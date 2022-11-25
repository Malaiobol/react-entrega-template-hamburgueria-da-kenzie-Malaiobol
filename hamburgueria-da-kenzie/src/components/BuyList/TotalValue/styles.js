import styled from "styled-components";

export const StyledTotalValue = styled.div`
  div {
    margin-top: 20px;

    border-top: solid 2px var(--colorGrey20);

    width: 100%;
    height: 120px;
  }
  p {
    margin-top: 14px;
    margin-left: 10px;

    color: var(--colorGrey100);

    font-weight: 600;
    font-size: 0.875rem;
    line-height: 24px;
  }
  span {
    margin-top: 14px;
    margin-left: 60%;

    color: var(--colorGrey50);
  }
  button {
    width: 100%;
    height: 60px;

    background-color: var(--colorGrey20);
    border: solid 2px var(--colorGrey20);
    border-radius: 8px;

    padding: 0px 20px;

    color: var(--colorGrey50);
    font-weight: 600;
    font-size: 1rem;
    line-height: 20px;
  }
  button:hover {
    cursor: pointer;

    color: var(--colorGrey100);

    background-color: var(--colorGrey50);
    border-color: var(--colorGrey50);
  }
`;
