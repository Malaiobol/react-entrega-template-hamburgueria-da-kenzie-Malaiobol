import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        font-family: 'inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul,li,a{
        list-style: none;
        text-decoration: none;
    }

    button{
        border: none;
        background-color: transparent;
    }

    :root{
        --colorPrimary: #27AE60;
        --colorHalfPrimary: #93D7AF;
        --colorSecondary: #EB5757;

        --colorGrey100: #333333;
        --colorGrey50: #828282;
        --colorGrey20: #E0E0E0;
        --colorGrey0: #F5F5F5;

        --colorWhiteFixed: #fff;
    }

    body{
        width: 100vw;
        height: 100vh;
    }
`;
