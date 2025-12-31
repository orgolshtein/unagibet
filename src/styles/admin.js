import styled from "styled-components";
import { darken, lighten } from "polished";

import * as AppColor from "./colors";

export const AdminDesignToggle = styled.label`
    position: ${(props)=>(
        props.$login_screen?
        "absolute"
        : "relative"
    )};
    top: ${(props)=>(
        props.$login_screen?
        "10px"
        : "unset"
    )};
    margin-top: 10px;
    font-size: 10px;
    display: inline-block;
    width: 40px;
    height: 23px;

    input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffffff;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 17px;
        width: 17px;
        left: 4px;
        bottom: 4px;
        background-color: ${(props)=>(
            props.$dark_mode?
            AppColor.AdminDarkHeaderColor
            : AppColor.AdminHeaderColor
        )};
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #000000;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #000000;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(17px);
        -ms-transform: translateX(17px);
        transform: translateX(17px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;

export const AdminLoginDiv = styled.div`
    display: ${(props)=>(props.$display)};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 720px;
    background-color: ${AppColor.AdminTableBackground};
    background-color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkTableBackground
        : AppColor.AdminTableBackground
    )};
    color: ${AppColor.AdminMainColor};
    color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkMainColor
        : AppColor.AdminMainColor
    )};
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
    background-color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkHeaderColor
        : AppColor.AdminHeaderColor
    )};
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
    color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkMainColor
        : AppColor.InputText
    )};
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
    color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkMainColor :
        AppColor.InputText
    )};
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
    color: ${AppColor.AdminButtonText};
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
        color: ${darken(0.3, AppColor.AdminButtonText)};
        background-color: ${darken(0.3, AppColor.LoginBtn)};
        cursor: default;

        &:hover{
            color: ${darken(0.3, AppColor.AdminButtonText)};
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
    background-color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkButtonColor
        : AppColor.AdminButtonColor
    )};
    border: 1px solid ${AppColor.AdminButtonBorder};
    color: ${AppColor.AdminButtonText};
    border-radius: 2px;
    padding: 3px 6px 3px 6px;
    font-size: 13px;
    width: auto;
    margin-top: 2px;
    margin-bottom: 2px;
    cursor: pointer;
    transition: background-color .15s ease-out;
    transition: color .15s ease-out;
    
    &:hover {
        background-color: ${(props)=>(
            props.$dark_mode?
            AppColor.AdminDarkButtonHoverColor
            : AppColor.AdminButtonHoverColor
        )};
        color: ${(props)=>(
            props.$dark_mode?
            AppColor.AdminDarkButtonHoverText
            : AppColor.AdminButtonHoverText
        )};
    }
`;

export const ContentTabsUl = styled.ul`
    display: ${(props)=>(props.$display)};
    flex-direction: row;
    justify-content: center;
    padding: 2rem 4rem 2rem 4rem;
    background-color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkMainBackground
        : AppColor.AdminMainBackground
    )};
    color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkMainColor
        : AppColor.AdminHeaderColor
    )};
    font-weight: bold;
    position: sticky;
    top: 3.9rem;
    z-index: 4;
    box-shadow: 0 4px 3px -2px ${AppColor.AdminMainBorder};

    li {
        border: ${(props)=>(
            props.$dark_mode?
            lighten(0.6, AppColor.AdminDarkHeaderColor)
            : lighten(0.6, AppColor.AdminHeaderColor)
        )}, 0.1rem, solid;
        padding: 1rem;
        width: 10rem;
        text-align: center;
        cursor: pointer;
    }

    li.chosen {
        background-color: ${(props)=>(
            props.$dark_mode?
            AppColor.AdminDarkActiveTabColor
            : AppColor.AdminActiveTabColor
        )};
        color: ${AppColor.AdminActiveTabText};
        text-decoration: underline;
        font-weight: bold;
    }
`;

export const ContentListContainerDiv = styled.div`
    display: ${(props)=>(props.$display)};
    background-color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkMainBackground
        : AppColor.AdminMainBackground
    )};

    .loading-failed{
        grid-column-start: 1;
        grid-column-end: 7;
        padding-top: 2rem;
        font-size: 2rem;
        font-weight: 700;
        margin: 1rem 0;
        line-height: 1.1;
        color: ${AppColor.ErrorText};
        text-align: center;
    }
`;

export const ContentListTable = styled.table`
    width: 99%;
    margin: .5%;
    box-shadow: ${AppColor.AdminMainBorder} 0px 0px 10px 1px;
    border-radius: 2px;
    background-color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkTableBackground
        : AppColor.AdminTableBackground
    )};
    color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkMainColor
        : AppColor.AdminMainColor
    )};
    margin-top: .1rem;

    th, td {
        border: solid 1px ${AppColor.AdminMainBorder};
        border-collapse: separate;
        border-spacing: 0;
        font-size: 13px;
        position: relative;
        align-content: center;
        padding: .5rem;
    }

    th {
        font-weight: bold;
        position: sticky; 
        top: 11.1rem; 
        z-index: 4;
        background-color: ${(props)=>(
            props.$dark_mode?
            AppColor.AdminDarkTableBackground
            : AppColor.AdminTableBackground
        )};
    }

    input {
        outline: none;
        background-color: ${(props)=>(
            props.$dark_mode?
            AppColor.AdminDarkLoginInputBackground
            : AppColor.AdminLoginInputBackground
        )};
        border: 0.5px solid ${(props)=>(
            props.$dark_mode?
            AppColor.AdminDarkMainColor
            : AppColor.InputBorder
        )};
        color: ${(props)=>(
            props.$dark_mode?
            AppColor.AdminDarkMainColor
            : AppColor.AdminMainColor
        )};

}
    input::placeholder{
        color: ${(props)=>(
            props.$dark_mode?
            AppColor.AdminDarkMainColor
            : AppColor.AdminMainColor
        )};
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
    -webkit-backdrop-filter: blur(15px) ${(props)=>(
        props.$dark_mode?
        "brightness(40%)"
        : "brightness(30%)"
    )};
    backdrop-filter: blur(15px) ${(props)=>(
        props.$dark_mode?
        "brightness(40%)"
        : "brightness(30%)"
    )};
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
    background-color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkTableBackground
        : AppColor.AdminTableBackground
    )};
    color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkMainColor
        : AppColor.AdminMainColor
    )};
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
    -webkit-backdrop-filter: blur(15px) ${(props)=>(
        props.$dark_mode?
        "brightness(40%)"
        : "brightness(30%)"
    )};
    backdrop-filter: blur(15px) ${(props)=>(
        props.$dark_mode?
        "brightness(40%)"
        : "brightness(30%)"
    )};
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
    background-color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkTableBackground
        : AppColor.AdminTableBackground
    )};
    color: ${(props)=>(
        props.$dark_mode?
        AppColor.AdminDarkMainColor
        : AppColor.AdminMainColor
    )};
    border: ${AppColor.AdminMainBorder} solid;
    border-radius: 3px;
    box-shadow: ${AppColor.AdminMainBorder} 0px 0px 15px 0px;
    z-index: 9;

    legend {
        font-weight: bold;
        font-size: 25px;
        position: relative;
    }

    input, textarea, select {
        outline: none;
        background-color: ${(props)=>(
            props.$dark_mode?
            AppColor.AdminDarkLoginInputBackground
            : AppColor.AdminLoginInputBackground
        )};
        border: 0.5px solid ${(props)=>(
            props.$dark_mode?
            AppColor.AdminDarkMainColor
            : AppColor.InputBorder
        )};
        color: ${(props)=>(
            props.$dark_mode?
            AppColor.AdminDarkMainColor
            : AppColor.AdminMainColor
        )};
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
