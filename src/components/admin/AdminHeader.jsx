import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../state/AppContext";
import { AdminHeaderDiv, AdminLoginBtn, InputAdmin } from "../../styles/admin";
import { AppLogo } from "../../styles/global";

export default function AdminHeader () {
    const {
        isAdminLoggedIn,
        admin,
        adminLogout
    } = useContext(AppContext);

    return (
    <AdminHeaderDiv
        $display={isAdminLoggedIn? "flex" : "none"}
    >
        <Link to="/">
            <AppLogo 
                $size="7"
                $size_medium="7"  
                $position="sticky" 
                $left_wide="10"
                $left="8"
                $z_index="2" 
                cursor="pointer" 
                alt="Main Logo"
            />
        </Link>
        <div className="adminLine"><p>Hello, {admin}!</p><p>Welcome to UnagiBet Admin</p></div>
        <AdminLoginBtn 
            $margin="1rem"
            onClick={() => {
                adminLogout()
            }}>Log Out
        </AdminLoginBtn>
    </AdminHeaderDiv>
    );
};
