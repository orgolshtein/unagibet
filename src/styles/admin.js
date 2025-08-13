import styled from "styled-components";
import { darken } from "polished";

import * as AppColor from "./colors";

export const AdminLoginDiv = styled.div`
    display: ${(props)=>(props.$display)};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 550px;
    background-color: ${AppColor.AdminMainBackground};
    color: ${AppColor.AdminMainColor};
`;

export const AdminHeaderDiv = styled.div`
    display: ${(props)=>(props.$display)};
    flex-direction: row;
    justify-content: space-evenly;
    background-color: ${AppColor.AdminHeaderColor};
    width: 100%;
    height: 4.8rem;
    color: ${AppColor.ButtonText};

    .adminLine{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${AppColor.ButtonText};

        p{
            line-height: 1.5rem;
        }

        p:first-child{
            font-weight: bold;
        }
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
    }

    &:hover {
        background-color: ${darken(0.2, AppColor.LoginBtn)};
    }
`;
