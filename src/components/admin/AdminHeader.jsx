import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../state/AppContext";
import { AdminDiv, AdminLoginBtn, InputAdmin } from "../../styles/admin";
import { AppLogo } from "../../styles/global";

export default function AdminHeader () {
    const {
        isAdminLoggedIn,
        admin,
        adminLogin,
        adminLogout
    } = useContext(AppContext);
    const adminUsernameInput = useRef("");
    const adminPasswordInput = useRef("");

    return (
    <AdminDiv
        $flex_type={isAdminLoggedIn ? "space-between": "center"}
    >  
        {
        isAdminLoggedIn ?
        <div className="adminHeader">
            <Link to="/">
                <AppLogo 
                    $size="8"
                    $size_medium="4"  
                    $position="sticky" 
                    $left_wide="10"
                    $left="8"
                    $z_index="2" 
                    cursor="pointer" 
                    alt="Main Logo"
                />
            </Link>
            <div className="adminLine">Hello, {admin}! you are now logged in</div>
            <AdminLoginBtn 
                $margin="3rem"
                onClick={() => {
                    adminLogout()
                }}>Log Out
            </AdminLoginBtn>
            
        </div>
        : <div className="loginBox">
            <Link to="/">
                <AppLogo 
                    $size="15"
                    $size_medium="9"  
                    $position="sticky" 
                    $left_wide="10"
                    $left="8"
                    $z_index="2" 
                    cursor="pointer" 
                    alt="Main Logo"
                />
            </Link> 
            <div>Login to UnagiBet Admin</div>
            <div>
                <InputAdmin 
                    type="text"
                    placeholder="Username"
                    ref={adminUsernameInput}
                />
            </div>
            <div>
                <InputAdmin 
                    type="text"
                    placeholder="Password"
                    ref={adminPasswordInput}
                />
            </div>
            <div>
                <AdminLoginBtn
                    $width="20rem" 
                    $margin="1rem"
                    onClick={() => {
                    adminLogin(
                        adminUsernameInput.current.value,
                        adminPasswordInput.current.value
                    )
                    }}>Login
                </AdminLoginBtn>
            </div>
        </div>
    }</AdminDiv>
    );
};