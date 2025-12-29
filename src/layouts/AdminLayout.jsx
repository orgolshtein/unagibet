import AdminHeader from "../components/admin/AdminHeader";
import AdminLogin from "../components/admin/AdminLogin";
import AdminContentTabs from "../components/admin/AdminContentTabs";
import AdminContentList from "../components/admin/AdminContentList";
import GlobalAdminStyle from "../styles/global.admin";
import AdminConfirmPopup from "../components/admin/AdminConfirmPopup";
import AdminMainForm from "../components/admin/AdminMainForm";
import { AppContext } from "../state/AppContext";
import { useContext } from "react";

const AdminLayout = () => {
    const {
        isAdminDarkMode
    } = useContext(AppContext);
    
    return (
        <>
            <GlobalAdminStyle 
                $dark_mode={isAdminDarkMode}
            />
            <AdminLogin />
            <AdminHeader />
            <AdminContentTabs />
            <AdminContentList />
            <AdminMainForm/>
            <AdminConfirmPopup />
        </>
    )
}

export default AdminLayout;
