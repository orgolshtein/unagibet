import { Outlet } from "react-router-dom";

import AdminHeader from "../components/admin/AdminHeader";
import AdminLogin from "../components/admin/AdminLogin";
import AdminContentTabs from "../components/admin/AdminContentTabs";
import AdminContentList from "../components/admin/AdminContentList";
import GlobalAdminStyle from "../styles/global.admin";
import AdminConfirmPopup from "../components/admin/AdminConfirmPopup";
import AdminMainForm from "../components/admin/AdminMainForm";

const AdminLayout = () => (
    <>
        <GlobalAdminStyle />
        <AdminLogin />
        <AdminHeader />
        <AdminContentTabs />
        <AdminContentList />
        <AdminMainForm/>
        <AdminConfirmPopup />
    </>
);

export default AdminLayout;
