import styled from "styled-components";
import { darken } from "polished";
import * as AppColor from "./colors";

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
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    transition: background-color .15s ease-out;
    transition: color .15s ease-out;

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
`

export const LoginHeaderBtnActive = styled.button`
    color: ${darken(0.3, AppColor.ButtonText)};
    background-color: ${darken(0.3, AppColor.LoginBtn)};
    text-transform: uppercase;
    font-size: .786rem;
    font-weight: 700;
    border: 0;
    border-radius: 0.1rem;

    @media only screen and (max-width: 1024px){
        min-width: 6rem;
        font-size: 1rem;
        font-weight: 600;
        height: 2rem;
        margin-top: 0.5rem;
    }
`

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
    grid-row-end: 4;
    transition: background-color .15s ease-out;
    transition: color .15s ease-out;

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
`

export const JoinHeaderBtnActive = styled.button`
    color: ${darken(0.3, AppColor.ButtonText)};
    background-color: ${darken(0.2, AppColor.JoinBtn)};
    text-transform: uppercase;
    font-size: .786rem;
    font-weight: 700;
    border: 0;
    border-radius: 0.1rem;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;

    @media only screen and (max-width: 1024px){
        min-width: 6rem;
        font-size: 1rem;
        font-weight: 600;
        height: 2rem;
        margin-top: 0.5rem;
    }
`

export const JoinGalleryBtn = styled.button`
    display: block;
    font-family: 'Gotham Bold',sans-serif;
    background-color:${AppColor.JoinBtn};
    position: absolute;
    top: 13rem;
    z-index: 1;
    width: 21.4rem;
    max-width: 100%;
    margin-left: 13.8rem;
    font-size: 1.7rem;
    cursor: pointer;
    padding-top: 0.1em;
    line-height: 1.7;
    border-radius: 0.2rem;
    font-weight: 700;
    color: ${AppColor.MainText};
    border: none;
    transition: background-color .15s ease-out;
    transition: color .15s ease-out;

    @media only screen and (max-width: 1024px){
        top: 11rem;
        width: 17rem;
        margin-left: 9rem;
        font-size: 1.4rem;
    }
    
    @media only screen and (max-width: 768px){
        top: 11rem;
        width: 17rem;
        margin-left: 1.5rem;
        font-size: 1.3rem;
    }

    @media only screen and (max-width: 412px){
        top: 7.5rem;
        width: 11rem;
        margin-left: 3rem;
        font-size: 1rem;
    }

    &:hover {
      background-color: ${darken(0.1, AppColor.JoinBtn)};
    }
`

export const JoinGalleryBtnActive = styled.button`
      color: ${darken(0.7, AppColor.MainText)};
      background-color: ${darken(0.2, AppColor.JoinBtn)};
      display: block;
      font-family: 'Gotham Bold',sans-serif;
      position: absolute;
      top: 13rem;
      z-index: 1;
      cursor: initial;
      width: 21.4rem;
      max-width: 100%;
      margin-left: 13.8rem;
      font-size: 1.7rem;
      padding-top: 0.1em;
      line-height: 1.7;
      border-radius: 0.2rem;
      font-weight: 700;
      border: none;
      transition: background-color .15s ease-out;
      transition: color .15s ease-out;

      @media only screen and (max-width: 1024px){
        top: 11rem;
        width: 17rem;
        margin-left: 9rem;
        font-size: 1.4rem;
    }
    
    @media only screen and (max-width: 768px){
        top: 11rem;
        width: 17rem;
        margin-left: 1.5rem;
        font-size: 1.3rem;
    }

    @media only screen and (max-width: 412px){
        top: 7.5rem;
        width: 11rem;
        margin-left: 3rem;
        font-size: 1rem;
    }
`

export const PopupCloseBtn = styled.span`
    background: url(${(props) => props.$url}) no-repeat 0 0/contain;
    width: 0.75em;
    height: 0.75em;
    right: 0.8em;
    top: 0.8em;
    position: absolute;
    z-index: 2;
    cursor: pointer;
    display: inline-block;
    min-height: 2.5em;

    @media only screen and (max-width: 412px) {
        width: 1.5em;
        height: 1.5em;
    }
`

export const ForgotPasswordCta = styled.button`
    color: ${AppColor.ButtonText};
    background-color: ${AppColor.LoginBtn};
    display: inline-block;
    position: relative;
    font-family: Asap,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 1.4rem;
    cursor: pointer;
    line-height: 2.25em;
    padding: 0 1em;
    border: 0;
    margin: 1rem auto;
    border-radius: 0.2rem;
    min-width: 100%;
    text-transform: uppercase;
    
    &:hover {
      background-color: ${darken(0.2, AppColor.LoginBtn)};
    }
`

export const ForgotPasswordCtaActive = styled.button`
    color: ${darken(0.3, AppColor.ButtonText)};
    background-color: ${darken(0.3, AppColor.LoginBtn)};
    display: inline-block;
    position: relative;
    font-family: Asap,Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 1.4rem;
    cursor: initial;
    line-height: 2.25em;
    padding: 0 1em;
    border: 0;
    margin: 1rem auto;
    border-radius: 0.2rem;
    min-width: 100%;
    text-transform: uppercase;
`

export const LoginPopupBtn = styled.button`
    color: ${AppColor.ButtonText};
    background-color: ${AppColor.LoginBtn};
    height: 2.8rem;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);
    border-radius: 0.2rem;
    min-width: 11em;
    font-family: 'Gotham Bold',sans-serif;
    transition: background-color .15s ease-out;
    display: inline-block;
    position: relative;
    border: 0;
    cursor: pointer;
    
    &:hover {
      background-color: ${darken(0.2, AppColor.LoginBtn)};
    }
`

export const LoginPopupBtnActive = styled.button`
    color: ${darken(0.3, AppColor.ButtonText)};
    background-color: ${darken(0.3, AppColor.LoginBtn)};
    height: 2.8rem;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);
    border-radius: 0.2rem;
    min-width: 11em;
    font-family: 'Gotham Bold',sans-serif;
    transition: background-color .15s ease-out;
    display: inline-block;
    position: relative;
    border: 0;
    cursor: initial;
`

export const JoinPopupBtn = styled.button`
    color: ${AppColor.ButtonText};
    background-color: ${AppColor.JoinBtn};
    height: 2.8rem;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);
    border-radius: 0.2rem;
    min-width: 11em;
    font-family: 'Gotham Bold',sans-serif;
    transition: background-color .15s ease-out;
    display: inline-block;
    position: relative;
    border: 0;
    cursor: pointer;
    
    &:hover {
      background-color: ${darken(0.1, AppColor.JoinBtn)};
    }
`

export const JoinPopupBtnActive = styled.button`
    color: ${darken(0.3, AppColor.ButtonText)};
    background-color: ${darken(0.2, AppColor.JoinBtn)};
    height: 2.8rem;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);
    border-radius: 0.2rem;
    min-width: 11em;
    font-family: 'Gotham Bold',sans-serif;
    transition: background-color .15s ease-out;
    display: inline-block;
    position: relative;
    border: 0;
    cursor: initial;
`

export const GameThumbBtn = styled.button`
    background-color: ${AppColor.JoinBtn};
    width: 0;
    display: none;
    line-height: 1.7;
    font-size: 0.8rem;
    min-width: calc(50% - 0.5em);
    border-radius: 0.1rem;
    text-transform: uppercase;
    font-weight: 700;
    transition: background-color .15s ease-out;
    color: ${AppColor.ButtonText};
    position: absolute;
    border: 0;
    top: ${(props)=>props.$top};
    left: ${(props)=>props.$left};
    z-index:3;
    cursor: pointer;

    @media only screen and (max-width: 412px) {
        width: 95%;                
        top: ${(props)=>props.$topsmall};
        left: ${(props)=>props.$leftsmall};
    }

    &:hover {
      background-color: ${darken(0.1, AppColor.JoinBtn)};
    }
`

export const PlayPopupBtn = styled.button`
    color: ${AppColor.ButtonText};
    background-color: ${AppColor.JoinBtn};
    height: 2.8rem;
    width: 3rem;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);
    border-radius: 0.2rem;
    line-height: 2.5em;
    min-width: 11rem;
    font-family: 'Gotham Bold',sans-serif;
    transition: background-color .15s ease-out;
    display: inline-block;
    position: relative;
    border: 0;
    cursor: pointer;

    &:hover {
      background-color: ${darken(0.1, AppColor.JoinBtn)};
    }
`

export const ToTopButton = styled.div`
    background: transparent;

    @media only screen and (max-width: 768px){
        display: none;
    }

    .shown{
        display: inline-block;
        background: url(/src/assets/icons/btop_icon.png) 50% 50%/contain no-repeat;
        position: fixed;
        z-index: 100;
        bottom: 3.5em;
        right: 1em;
        width: 3.8em;
        height: 3.8em;
        cursor: pointer;
        visibility: visible;
        opacity: 1;
        transition: opacity 200ms linear;
    }

    .hidden{
        display: inline-block;
        background: url(/src/assets/icons/btop_icon.png) 50% 50%/contain no-repeat;
        position: fixed;
        z-index: 100;
        bottom: 3.5em;
        right: 1em;
        width: 3.8em;
        height: 3.8em;
        cursor: pointer;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 100ms, opacity 100ms linear;
    }
`