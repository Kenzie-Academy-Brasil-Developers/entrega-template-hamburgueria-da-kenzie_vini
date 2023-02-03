import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secundary: #eb5757;

    --gray_1: #f5f5f5;
    --gray_2: #e0e0e0;
    --gray_3: #828282;
    --gray_4: #333333;

    --negative: #e60000;
    --warning: #ffcd07;
    --sucess: #168821;
    --information: #155bcb;
  }

  font-family: "Inter", sans-serif;
`;
