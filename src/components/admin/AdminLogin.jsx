import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AppContext } from "../../state/AppContext";
import * as AppColor from "../../styles/colors";
import { AdminLoginBtn, AdminLoginDiv, AdminLoginForm, InputAdmin, InputAdminContainer } from "../../styles/admin";
import { AppLogo, Loader, PasswordVisIcon } from "../../styles/global";
import useSubmit from "../../hooks/useSubmit";
import { assetUrl } from "../../api/app.api";
import usePassIconToggle from "../../hooks/usePassIconToggle";
import useInputBorderToggle from "../../hooks/useInputBorderToggle";

export default function AdminLogin () {
    const {
        adminLogin,
        isAdminLoggedIn
    } = useContext(AppContext);

    const passIcon = usePassIconToggle(
        `${assetUrl}/icons/password_visible_icon.svg`,
        `${assetUrl}/icons/password_invisible_icon.svg`
    )

    const {
        register,
        handleSubmit,
        getValues,
        setFocus,
        clearErrors,
        formState: { errors }
    } = useForm();

    const submit = useSubmit(
        AppColor.AdminLoginInputBackground, 
        AppColor.DisbledInputBackground,
        <Loader $size="2rem" />,
        "Invalid login details. It's not something you are, it's something you HAVE!"
    );

    const inputBorder = useInputBorderToggle(
        submit.submitErrMsg, 
        AppColor.InputBorder, 
        AppColor.InputErrorBorder
    );

    return (
    <AdminLoginDiv
        $display={isAdminLoggedIn? "none" : "flex"}
    >
        <Link to="/">
            <AppLogo 
                $size="15"
                $size_medium="15"  
                $position="sticky" 
                $left_wide="10"
                $left="8"
                $z_index="2" 
                cursor="pointer" 
                alt="Main Logo"
            />
        </Link> 
        <div>Login to UnagiBet Admin</div>
        <AdminLoginForm onSubmit={handleSubmit(() =>{
            submit.onSubmit(
                adminLogin,
                getValues("username"),
                getValues("password")
            );
        })}>
            <InputAdminContainer>
                <img 
                    className="inputIcon" 
                    src={`${assetUrl}/icons/login_user_icon.svg`} 
                    onClick={()=>{
                        setFocus("username");
                }}/>
                <InputAdmin 
                    type="text"
                    autoComplete="on"
                    placeholder="Username"
                    disabled={submit.isInputDisabled}
                    onClick={() => {
                        submit.setSubmitErrMsg("");
                        clearErrors();
                    }}
                    $background={submit.inputBackgroundColor} 
                    $input_border={inputBorder}
                    $error_styled={errors.username}
                    {...register("username", {
                    required: "Username is required",
                    value: "",
                    minLength: { value:3, message: "Username is too short" }
                    })}
                />
            </InputAdminContainer>
            <p>{errors.username?.message}</p>
            <InputAdminContainer>
                <img 
                    className="inputIcon" 
                    src={`${assetUrl}/icons/login_password_icon.svg`} 
                    onClick={()=>{
                        setFocus("password");
                }}/>
                <InputAdmin 
                    type={passIcon.passInputType}
                    autoComplete="on"
                    placeholder="Password"
                    disabled={submit.isInputDisabled}
                    onClick={() => {
                        submit.setSubmitErrMsg("");
                        clearErrors();
                    }}
                    $background={submit.inputBackgroundColor}
                    $input_border={inputBorder}
                    $error_styled={errors.password}
                    {...register("password", {
                    value: "",
                    required: "Password is required",
                    minLength: { value: 3, message: "Password is too short" }
                    })}
                />
                <PasswordVisIcon 
                    width="1.9rem" 
                    src={passIcon.passwordIcon} 
                    cursor={submit.isBtnActive ? "default" : "pointer"} 
                    onClick={submit.isBtnActive ? null : () =>{
                        passIcon.toggle();
                    }}
                />
            </InputAdminContainer>
            <p>{errors.password?.message}</p>
            <AdminLoginBtn
                $width="20rem" 
                $margin="1rem"
                type="submit"
            >Login
            </AdminLoginBtn>
            {
                submit.submitErrMsg !== "" ?
                <p>{submit.submitErrMsg}</p> : null                          
            }
        </AdminLoginForm>
    </AdminLoginDiv>
    );
};
