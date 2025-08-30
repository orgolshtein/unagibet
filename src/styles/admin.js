import styled from "styled-components";
import { darken, lighten } from "polished";

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

export const AdminLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: .9rem;
        color: ${AppColor.ErrorText};
        text-align: center;
        font-weight: bold;
        padding-top: 0.3rem;
    }

    .inputIcon{
        left: 0.5rem;
        top: 1.2rem;
        width: 1.214em;
        position: absolute;
        display: inline-block;
        opacity: .65;
        transform: translate3d(0,-50%,0);
        cursor: pointer;
    }
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

export const InputAdminContainer = styled.span`
    display: block;
    position: relative;
    font-size: 1rem;
    color: ${AppColor.InputText};
    box-shadow: none;
    height: 2.5em;
    padding: 0 .1rem 0 0.1rem;
    width: 20rem;
    font-weight: 400;
    transition: box-shadow 100ms,border 100ms;
    margin: 0.7em 0 0.7em 0;
    line-height: 1;
`;

export const InputAdmin = styled.input`
    border: 1.5px solid ${(props)=>(props.$error_styled ? AppColor.InputErrorBorder : props.$input_border)};
    border-radius: 0.2rem;
    background-color: ${(props)=>(props.$background)};
    font-size: 1rem;
    color: ${AppColor.InputText};
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 2.5rem;

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

export const ContentTabsUl = styled.ul`
    display: ${(props)=>(props.$display)};
    flex-direction: row;
    justify-content: center;
    padding: 2rem 5rem 5.5rem 5rem;
    background-color: ${AppColor.AdminMainBackground};
    color: ${AppColor.AdminHeaderColor};
    font-weight: bold;

    li {
        border: ${lighten(0.6, AppColor.AdminHeaderColor)}, 0.1rem, solid;
        padding: 1rem;
        width: 10rem;
        text-align: center;
        cursor: pointer;
    }
`;
