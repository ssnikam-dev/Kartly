import { Route } from 'react-router-dom';
import InvoiceMgmt from "../../ModuleAndSubmodule/Seller/InventoryMgmt/InvoiceMgmt";
import ProductOrders from "../../ModuleAndSubmodule/Seller/InventoryMgmt/ProductOrders";
import OrderMgMyDashboard from '../../ModuleAndSubmodule/Seller/OrderMgmt/OrderMgmtDashboard';
import ReceivedOrderRequests from '../../ModuleAndSubmodule/Seller/OrderMgmt/ReceivedOrderRequests';
import OrderDetailsPage from '../../ModuleAndSubmodule/Seller/OrderMgmt/OrderDetailsPage';
import CheckAvailibilityOrder from '../../ModuleAndSubmodule/Seller/OrderMgmt/CheckAvailabilityOrder';
import SendNotificationsOrder from '../../ModuleAndSubmodule/Seller/OrderMgmt/SendNotificationsOrder';
import GenerateInvoice from '../../ModuleAndSubmodule/Seller/OrderMgmt/GenerateInvoice';

export default function OrderManagement() {
    return (
        <>
            <Route path='order-mgmt/dashboard' element={<OrderMgMyDashboard />} />
            <Route path='order-mgmt/received-order-requests' element={<ReceivedOrderRequests />} />
            <Route path='order-mgmt/order-details-page' element={<OrderDetailsPage />} />
            <Route path='order-mgmt/check-availabiliy-products' element={<CheckAvailibilityOrder />} />
            <Route path='order-mgmt/send-notification' element={<SendNotificationsOrder />} />
            <Route path='order-mgmt/generate-invoice' element={<GenerateInvoice />} />
        </>
    )
}