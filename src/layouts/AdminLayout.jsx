import { Outlet } from "react-router-dom";

import AdminHeader from "../components/admin/AdminHeader";
import AdminLogin from "../components/admin/AdminLogin";
import AdminContentTabs from "../components/admin/AdminContentTabs";
import AdminContentList from "../components/admin/AdminContentList";

const AdminLayout = () => (
    <>
        <AdminLogin />
        <AdminHeader />
        <AdminContentTabs />
        <AdminContentList />
    </>
);

export default AdminLayout;
