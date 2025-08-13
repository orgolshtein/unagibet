import styled from "styled-components";
import { darken } from "polished";

import * as AppColor from "./colors";

export const AdminDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${(props)=>(props.$flex_type)};;
    font-size: 1.3rem;
    height: 680px;
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    scrollbar-gutter: stable;
    background-color: ${AppColor.AdminMainBackground};
    color: ${AppColor.AdminMainColor};

    .loginBox{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .adminHeader{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        background-color: ${AppColor.AdminHeaderColor};
        width: 100%;
        height: 7.8rem;
    }

    .adminLine{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: ${AppColor.ButtonText};
    }
`;

export const InputAdmin = styled.input`
    border: 1.5px solid ${(props)=>(props.$error_styled ? AppColor.InputErrorBorder : props.$input_border)};
    border-radius: 0.2rem;
    background-color: ${(props)=>(props.$background)};
    font-size: 1rem;
    color: ${AppColor.InputText};
    width: 20rem;
    padding: 0 2.5em 0 0.56em;
    height: 40px;
    margin: 0.56em 0 0.56em 0;

    &:focus{
        outline-width: 0;
    }
`;

export const AdminLoginBtn = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${AppColor.LoginBtn};
    color: ${AppColor.ButtonText};
    min-width: 7.5rem;
    height: 3rem;
    width: ${(props)=>(props.$width)};
    font-size: .786rem;
    text-transform: uppercase;
    font-weight: 700;
    border: 0;
    border-radius: 0.1rem;
    text-align: center;
    cursor: pointer;
    transition: background-color .15s ease-out;
    transition: color .15s ease-out;
    margin-top: ${(props)=>(props.$margin)};;

    &:disabled{
        color: ${darken(0.3, AppColor.ButtonText)};
        background-color: ${darken(0.3, AppColor.LoginBtn)};
        cursor: default;

        &:hover{
            color: ${darken(0.3, AppColor.ButtonText)};
            background-color: ${darken(0.3, AppColor.LoginBtn)};
        }
    }

    @media only screen and (max-width: 1024px){
        min-width: 6rem;
        font-size: 1rem;
        font-weight: 600;
        height: 2rem;
        margin-top: 0.5rem;
    }

    &:hover {
        background-color: ${darken(0.2, AppColor.LoginBtn)};
    }
`;
