import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../state/AppContext";
import { AdminDesignToggle, AdminHeaderDiv, AdminLoginBtn } from "../../styles/admin";
import { AppLogo } from "../../styles/global";
import { useForm } from "react-hook-form";
import { useOncePostMount } from "../../hooks/useOncePostMount";

export default function AdminHeader () {
    const {
        isAdminDarkMode,
        toggleDarkMode,
        isAdminLoggedIn,
        admin,
        adminLogout
    } = useContext(AppContext);

    const adminHeaderDesignToggleRef = useRef();
    
    useOncePostMount(() => {
        isAdminDarkMode?
        adminHeaderDesignToggleRef.current.checked = true
        : adminHeaderDesignToggleRef.current.checked = false
    });

    useEffect(()=>{
        isAdminDarkMode?
        adminHeaderDesignToggleRef.current.checked = true
        : adminHeaderDesignToggleRef.current.checked = false
    },[isAdminDarkMode]);
    
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
        $dark_mode={isAdminDarkMode}
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
        <AdminDesignToggle $dark_mode={isAdminDarkMode} onChange={toggleDarkMode}>
            <input name="design-toggle-adminheader" type="checkbox" ref={adminHeaderDesignToggleRef} />
            <span className="slider round"></span><br /><br /><br />{isAdminDarkMode?"Dark Mode": "Light Mode"}
        </AdminDesignToggle>
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
