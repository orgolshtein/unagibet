import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../state/AppContext";
import { AdminLoginBtn, AdminLoginDiv, InputAdmin } from "../../styles/admin";
import { AppLogo } from "../../styles/global";

export default function AdminLogin () {
    const {
        isAdminLoggedIn,
        adminLogin
    } = useContext(AppContext);
    const adminUsernameInput = useRef("");
    const adminPasswordInput = useRef("");

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
    </AdminLoginDiv>
    );
};
