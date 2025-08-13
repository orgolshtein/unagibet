import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AppContext } from "../../state/AppContext";
import { assetUrl } from "../../api/app.api";
import * as AppColor from "../../styles/colors";
import { HeaderDiv, LoginHeaderBtn, JoinHeaderBtn, InputHeader, AdminLink } from "../../styles/header.footer";
import { AppLogo, Loader, PasswordVisIcon } from "../../styles/global";
import useInputBorderToggle from "../../hooks/useInputBorderToggle";
import usePassIconToggle from "../../hooks/usePassIconToggle";
import useSubmit from "../../hooks/useSubmit";

export default function Header (){
    const passIcon = usePassIconToggle(
        `${assetUrl}/icons/password_visible_icon.svg`,
        `${assetUrl}/icons/password_invisible_icon.svg`
    )
    const submit = useSubmit(
        AppColor.InputBackground, 
        AppColor.DisbledInputBackground,
        <Loader $size="2.7rem" $margin_left="4.5rem" />,
        "Username/Email or Password does not exist"
    )
    const loginInputBorder = useInputBorderToggle(
        submit.submitErrMsg, 
        AppColor.InputBorder, 
        AppColor.InputErrorBorder
    );
    const { 
        setIsForgotPassDisplayed, 
        setIsGameOverlayDisplayed,
        openLoginPopup,
        openRegBlockPopup,
        admin,
        isAdminLoggedIn
    } = useContext(AppContext);

    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors }
      } = useForm();

    return (
    <HeaderDiv>
        <div className="headerContent">
            <Link to="/" onClick={()=>setIsGameOverlayDisplayed(false)}>
                <AppLogo 
                    $size="10"
                    $size_medium="6"  
                    $position="sticky" 
                    $left_wide="5"
                    $left="4"
                    $z_index="2" 
                    cursor="pointer" 
                    alt="Main Logo"
                />
            </Link>
            {
                isAdminLoggedIn?
                <AdminLink
                    $display="none"
                ><Link to="/admin">{admin}</Link></AdminLink>: null
            }
            <form className="authGrid" onSubmit={handleSubmit(() =>{
                setIsGameOverlayDisplayed(false);
                submit.onSubmit();
            })}>
                <span className="inputContainer">
                    <InputHeader 
                        $input_border={loginInputBorder}
                        type="text"
                        autoComplete="on"
                        placeholder="Username / Email"
                        disabled={submit.isInputDisabled}
                        $background={submit.inputBackgroundColor}
                        onClick={() => {
                            setIsGameOverlayDisplayed(false);
                            submit.setSubmitErrMsg("");
                            clearErrors();
                        }}
                        $error_styled={errors.username}
                        {...register("username", {
                        required: "Username/Email is required",
                        minLength: { value:3, message: "Username/Email is too short" }
                        })}
                    />
                </span> 
                <span className="inputContainer">
                    <InputHeader 
                        $input_border={loginInputBorder}
                        type={passIcon.passInputType}
                        autoComplete="on"
                        placeholder="Password:"
                        disabled={submit.isInputDisabled}
                        $background={submit.inputBackgroundColor}
                        onClick={() => {
                            setIsGameOverlayDisplayed(false);
                            submit.setSubmitErrMsg("");
                            clearErrors();
                        }}
                        $error_styled={errors.password}
                        {...register("password", {
                        required: "Password is required",
                        minLength: { value:3, message: "Password is too short" }
                        })}
                    />
                    <PasswordVisIcon 
                        width="1.2em" 
                        src={passIcon.passwordIcon} 
                        cursor={submit.isBtnActive ? "default" : "pointer"} 
                        onClick={submit.isBtnActive ? null : () => {
                            setIsGameOverlayDisplayed(false);
                            passIcon.toggle()
                        }}
                    />
                </span>  
                <LoginHeaderBtn disabled={submit.isBtnActive ? true : false}>Login</LoginHeaderBtn>
                {errors.username?<p>{errors.username.message}</p> :<span></span> }
                {
                    errors.password ?
                    <p>{errors.password.message}</p> :
                    <span className="msgContainer">{submit.submitErrMsg}</span>
                 }
                <span><a onClick={() => {
                    setIsGameOverlayDisplayed(false);
                    setIsForgotPassDisplayed(true);
                }}>Forgotten Password?</a></span>
                <span></span>
                <JoinHeaderBtn 
                    type="button" 
                    disabled={submit.isJoinBtnActive ? true : false} 
                    onClick={()=>openRegBlockPopup(submit.setIsJoinBtnActive, setIsGameOverlayDisplayed)}
                >Join Now</JoinHeaderBtn>
            </form>
            <div className="authResponsive">
                {
                    isAdminLoggedIn?
                    <AdminLink><Link to="/admin">{admin}</Link></AdminLink> : null
                }
                <LoginHeaderBtn onClick={() => {
                    openLoginPopup();
                }}>Login</LoginHeaderBtn>
                <JoinHeaderBtn 
                    disabled={submit.isJoinBtnActive ? true : false}
                    onClick={()=>openRegBlockPopup(submit.setIsJoinBtnActive, setIsGameOverlayDisplayed)}
                >Join Now</JoinHeaderBtn>
            </div>
        </div>
    </HeaderDiv>
    );
};
