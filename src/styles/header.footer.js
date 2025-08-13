import styled from "styled-components";
import { darken } from "polished";

import * as AppColor from "./colors";

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${AppColor.MainTheme1};
    height: 7.8rem;
    width: 100%;
    font-weight: 300;
    position: fixed;
    top: 0;
    z-index: 101;

    @media only screen and (max-width: 1024px){
        display: block;
    }

    @media only screen and (max-width: 768px){
        height: 5rem;
    }
    
    .headerContent{
        width: 90rem;
        display: block;
        padding: 0.7rem 5rem 1.15rem;
        height: 7.8rem;
        position: fixed;

        @media only screen and (max-width: 1024px){
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }

        @media only screen and (max-width: 768px){
        height: 5rem;
        }

        @media only screen and (max-width: 412px){
            gap: 1rem;
        }
    
        .authGrid {
            display: grid;
            grid-template-columns: 12rem 12rem 8rem;
            grid-template-rows: 2rem .3rem .65rem;
            position: absolute;
            top: 1.7rem;
            right: 2%;
            gap: 0.5rem;

            @media only screen and (max-width: 1024px){
                display: none;
            }

            .inputContainer {
                position: relative;
            }

            a {
            font-weight: 550;
            text-decoration: underline;
            cursor: pointer;
            transition: color .15s ease-out;
            
                &:hover {
                    color: ${darken(0.2, AppColor.MainText)};
                }
            }
        
            .msgContainer{
                color: ${AppColor.ErrorText};
                font-weight: 100;
                font-size: 90%;
            }

            p {
                color: ${AppColor.ErrorText};
                font-weight: 100;
                font-size: 60%;
            }
        }

        .authResponsive{
            display:flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;

            @media only screen and (min-width: 1024px){
                display: none;
            }
        }
    }
`;

export const InputHeader = styled.input`
    border: 1.5px solid ${(props)=>(props.$error_styled ? AppColor.InputErrorBorder : props.$input_border)};
    border-radius: 0.2rem;
    background-color: ${(props)=>(props.$background)};
    font-size: 1rem;
    color: ${AppColor.InputText};
    width: 100%;
    padding: 0 2.5em 0 0.56em;
    height: 100%;

    &:focus{
        outline-width: 0;
    }
`;

export const LoginHeaderBtn = styled.button`
    background-color: ${AppColor.LoginBtn};
    color: ${AppColor.ButtonText};
    min-width: 7.5rem;
    font-size: .786rem;
    text-transform: uppercase;
    font-weight: 700;
    border: 0;
    border-radius: 0.1rem;
    text-align: center;
    cursor: pointer;
    transition: background-color .15s ease-out;
    transition: color .15s ease-out;

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

export const JoinHeaderBtn = styled.button`
    background-color: ${AppColor.JoinBtn};
    color: ${AppColor.ButtonText};
    min-width: 7.5rem;
    font-size: .786rem;
    text-transform: uppercase;
    font-weight: 700;
    border: 0;
    border-radius: 0.1rem;
    text-align: center;
    cursor: pointer;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 5;
    transition: background-color .15s ease-out;
    transition: color .15s ease-out;

    &:disabled{
        color: ${darken(0.3, AppColor.ButtonText)};
        background-color: ${darken(0.2, AppColor.JoinBtn)};
        cursor: default;

        &:hover{
            color: ${darken(0.3, AppColor.ButtonText)};
            background-color: ${darken(0.2, AppColor.JoinBtn)};
        }
    }

    @media only screen and (max-width: 1024px){
        min-width: 6rem;
        font-size: 1rem;
        font-weight: 600;
        height: 2rem;
        margin-top: 0.5rem;
    }

    @media only screen and (max-width: 340px){
        display: none;
    }
    
    &:hover {
        background-color: ${darken(0.1, AppColor.JoinBtn)};
    }
`;

export const FooterDiv = styled.div`
    background-color: ${AppColor.MainTheme1};
    font-weight: 300;
    position: relative;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 5rem 10rem 10% 10rem;
    height: 7.8rem;
    z-index: 100;
    text-align: center;
    gap: 2rem;
    margin-top: 5rem;
    margin-bottom:0;

     @media only screen and (max-width: 768px) {
        height: fit-content; 
        z-index: 0;  
        margin: 0;
        padding: 0;
        padding-top: 2rem;
        padding-bottom: 2rem;  
    }

    @media only screen and (max-height: 412px){
            width: 100%
        }

    img{
        width: 70rem;

        @media only screen and (max-width: 768px) {
            width: 90%;          
        }

        @media only screen and (max-height: 412px){
            width: 100%
        }
    }

    p{
        line-height: 1.2rem;

        a{
            color: ${AppColor.MainText};
        }
        
        @media only screen and (max-width: 768px) {
            width: 100%;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            font-size:0.8rem;
        }
    }
`;

export const AdminLink = styled.span`
     @media only screen and (max-width: 1024px) {
            display: ${(props)=>(props.$display)};
        }
    a {
        font-weight: 550;
        text-decoration: underline;
        cursor: pointer;
        transition: color .15s ease-out;
        color: ${AppColor.MainText};
        position: absolute;

        @media only screen and (max-width: 1024px) {
            position: relative;
        }
        
        &:hover {
            color: ${darken(0.2, AppColor.MainText)};
        }
    }
    
`
