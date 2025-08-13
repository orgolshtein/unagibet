import { Outlet } from "react-router-dom";

import AdminHeader from "../components/admin/AdminHeader";
import AdminLogin from "../components/admin/AdminLogin";

const AdminLayout = () => (
    <>
        <AdminLogin />
        <AdminHeader />
    </>
);

export default AdminLayout;
