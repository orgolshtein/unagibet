import { Outlet } from "react-router-dom";

import AdminHeader from "../components/admin/AdminHeader";
import AdminLogin from "../components/admin/AdminLogin";
import AdminContentTabs from "../components/admin/AdminContentTabs";

const AdminLayout = () => (
    <>
        <AdminLogin />
        <AdminHeader />
        <AdminContentTabs />
    </>
);

export default AdminLayout;
