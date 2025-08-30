import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../state/AppContext";
import { AdminHeaderDiv, AdminLoginBtn } from "../../styles/admin";
import { AppLogo } from "../../styles/global";
import { useForm } from "react-hook-form";

export default function AdminHeader () {
    const {
        isAdminLoggedIn,
        admin,
        adminLogout
    } = useContext(AppContext);

    const {
        register,
        handleSubmit,
        setValue,
        setFocus,
        clearErrors,
        formState: { errors }
    } = useForm();

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
        <form onSubmit={handleSubmit(() =>{
            adminLogout()
        })}>
            <AdminLoginBtn 
                $margin="1rem"
            >Log Out
            </AdminLoginBtn>
        </form>
    </AdminHeaderDiv>
    );
};
