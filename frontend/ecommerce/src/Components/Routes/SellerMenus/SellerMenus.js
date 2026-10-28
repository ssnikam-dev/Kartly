import { Route } from "react-router-dom";
import InventoryMgmt from "./InventoryManagement";
import OrderManagement from "./OrderManagement";
import SellerDashboard from "../../ModuleAndSubmodule/Seller/SellerDashboard";
import LogisticsMgmt from "./LogisticsManagement";
import CommonScreen from "../../Structure/CommonScreen";
import UserMgmt from "./UserManagement";
import BusinessAdminMgmt from "./AdminManagement";
import EmployeeDashboard from "../../ModuleAndSubmodule/Seller/EmployeeDashboard";

export default function SellerMenus() {
    return (
        <>
            <Route path='/' element={<CommonScreen />}>
                {InventoryMgmt()}
                {OrderManagement()}
                {LogisticsMgmt()}
                {UserMgmt()}
                {BusinessAdminMgmt()}
                <Route path='seller/dashboard' element={<SellerDashboard />} />
                <Route path='seller/employee/dashboard' element={<EmployeeDashboard />} />
            </Route>
        </>
    )
}