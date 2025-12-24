import styled from "styled-components";
import { darken, lighten } from "polished";

import * as AppColor from "./colors";

export const AdminLoginDiv = styled.div`
    display: ${(props)=>(props.$display)};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 720px;
    background-color: ${AppColor.AdminTableBackground};
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
    position: sticky;
    z-index: 8;
    top: 0;

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

export const AdminBtn = styled.button`
    background-color: ${AppColor.AdminButtonColor};
    border: 1px solid ${AppColor.AdminButtonBorder};
    color: ${AppColor.AdminButtonText};
    border-radius: 2px;
    padding: 3px 6px 3px 6px;
    font-size: ${AppColor.AdminTableFont};
    width: auto;
    margin-top: 2px;
    margin-bottom: 2px;
    cursor: pointer;
    transition: background-color .15s ease-out;
    transition: color .15s ease-out;
    
    &:hover {
        background-color: ${AppColor.AdminButtonHoverColor};
        color: ${AppColor.AdminButtonHoverText};
    }
`;

export const ContentTabsUl = styled.ul`
    display: ${(props)=>(props.$display)};
    flex-direction: row;
    justify-content: center;
    padding: 2rem 4rem 2rem 4rem;
    background-color: ${AppColor.AdminMainBackground};
    color: ${AppColor.AdminHeaderColor};
    font-weight: bold;
    position: sticky;
    top: 3.9rem;
    z-index: 4;
    box-shadow: 0 4px 3px -2px ${AppColor.AdminMainBorder};

    li {
        border: ${lighten(0.6, AppColor.AdminHeaderColor)}, 0.1rem, solid;
        padding: 1rem;
        width: 10rem;
        text-align: center;
        cursor: pointer;
    }

    li.chosen {
        background-color: ${AppColor.AdminActiveTabColor};
        color: ${AppColor.AdminActiveTabText};
        text-decoration: underline;
        font-weight: bold;
    }
`;

export const ContentListContainerDiv = styled.div`
    display: ${(props)=>(props.$display)};
    background-color: ${AppColor.AdminMainBackground};
`;

export const ContentListTable = styled.table`
    width: 99%;
    margin: .5%;
    box-shadow: ${AppColor.AdminMainBorder} 0px 0px 10px 1px;
    border-radius: 2px;
    background-color: ${AppColor.AdminTableBackground};
    color: ${AppColor.AdminMainColor};
    margin-top: .1rem;

    th, td {
        border: solid 1px ${AppColor.AdminMainBorder};
        border-collapse: separate;
        border-spacing: 0;
        font-size: ${AppColor.AdminTableFont};
        position: relative;
        align-content: center;
        padding: .5rem;
    }

    th {
        font-weight: bold;
        position: sticky; 
        top: 11.1rem; 
        z-index: 4;
        background-color: ${AppColor.AdminTableBackground};
    }
`;

export const ConfirmPopupContainer = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    z-index: 10;
    -webkit-backdrop-filter: blur(15px) brightness(20%);
    backdrop-filter: blur(15px) brightness(20%);
`;

export const ConfirmPopupDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: fixed;
    padding: 1px;
    padding-top: 15px;
    top: 30%;
    left: 40%;
    min-width: 15%;
    min-height: 115px; 
    background-color: ${AppColor.AdminTableBackground};
    border: 1px ${AppColor.AdminMainBorder} solid;
    border-radius: 3px;
    box-shadow: ${AppColor.AdminMainBorder} 0px 0px 15px 0px;
    z-index: 10;

    .alert-text {
        text-align: center;
    }

    .alert-buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
    }

    .alert-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;

export const MainFormContainer = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    z-index: 9;
    -webkit-backdrop-filter: blur(15px) brightness(20%);
    backdrop-filter: blur(15px) brightness(20%);
`;

export const MainFormDiv = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    width: 60%;
    height: 85%;
    justify-content: center;
    align-items: space-evenly;
    top: 10%;
    left: 20%;
    padding: 5rem;
    background-color: ${AppColor.AdminTableBackground};
    border: ${AppColor.AdminMainBorder} solid;
    border-radius: 3px;
    box-shadow: ${AppColor.AdminMainBorder} 0px 0px 15px 0px;
    z-index: 9;

    legend {
        font-weight: bold;
        font-size: 25px;
        position: relative;
    }

    .form-inputs {
        position: relative;
        height: 100%;
        width: 100%;
        gap: 6rem;
        border: none;
        display:flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: space-evenly;
        justify-content: center;
        align-items: center;

        div{
            display:flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
        }
    }

    .form-buttons {
        border: none;
        display: flex;
        flex-direction: row;
        gap: 10px;
        justify-content: space-evenly;
        position: absolute;
        top: 88%;
        left: 70%;
    }

    .close-button {
        position: absolute;
        top: 5%;
        left: 95%;
        width: 22px;
        height: 22px;
    }
`;
