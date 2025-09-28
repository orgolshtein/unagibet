import styled, { createGlobalStyle } from "styled-components";
import Reset from "styled-reset";

import { assetUrl } from "../api/app.api";
import * as AppColor from "./colors";

const GlobalAdminStyle = createGlobalStyle`
${Reset}
html {
    font: 13.5px 'Helvetica Neue',Arial;
    color: ${AppColor.AdminMainColor};
    background: ${AppColor.AdminMainBackground};
    font-family: Arial,sans-serif;

    @media only screen and (max-width: 1024px) {
        width: 100%;                
    }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export default GlobalAdminStyle;
