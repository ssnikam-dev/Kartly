import { Route } from 'react-router-dom';
import ProductMaster from "../../ModuleAndSubmodule/Seller/InventoryMgmt/ProductMaster";
import WarehouseMaster from "../../ModuleAndSubmodule/Seller/InventoryMgmt/WarehouseMaster";
import StockProductMaster from "../../ModuleAndSubmodule/Seller/InventoryMgmt/StockProductMaster";
import SupplierMaster from '../../ModuleAndSubmodule/Seller/InventoryMgmt/SupplierMaster';
import PhysicalStockProductUpdate from '../../ModuleAndSubmodule/Seller/InventoryMgmt/PhysicalStockProductUpdate';
import ReorderInitiator from '../../ModuleAndSubmodule/Seller/InventoryMgmt/ReorderInitiator';
import RequestedReorderStatus from '../../ModuleAndSubmodule/Seller/InventoryMgmt/RequestedReorderStatus';
import InventoryDashboard from '../../ModuleAndSubmodule/Seller/InventoryMgmt/InventoryDashboard';
import ABCAnalysis from '../../ModuleAndSubmodule/Seller/InventoryMgmt/ABCAnalysis';
import ProductSpecificationValueMaster from '../../ModuleAndSubmodule/Seller/InventoryMgmt/ProductSpecificationValueMaster';
import ProductFinalCostMaster from '../../ModuleAndSubmodule/Seller/InventoryMgmt/ProductFinalCostMaster';

export default function InventoryMgmt() {
    return (
        <>
            <Route path="inventory-mgmt/product-master/add" element={<ProductMaster />} />
            <Route path="inventory-mgmt/warehouse-master/add" element={<WarehouseMaster />} />
            <Route path="inventory-mgmt/stock-product-master/add" element={<StockProductMaster />} />
            <Route path='inventory-mgmt/supplier-master/add' element={<SupplierMaster />} />
            <Route path='inventory-mgmt/physical-stock-update' element={<PhysicalStockProductUpdate />} />
            <Route path='inventory-mgmt/reorder-initiator' element={<ReorderInitiator />} />
            <Route path='inventory-mgmt/requested-reorder-status' element={<RequestedReorderStatus />} />
            <Route path='inventory-mgmt/dashboard' element={<InventoryDashboard />} />
            <Route path='inventory-mgmt/abc-analysis' element={<ABCAnalysis />} />
            <Route path='inventory-mgmt/product-final-specification-master' element={<ProductSpecificationValueMaster />} />
            <Route path='inventory-mgmt/product-final-cost-master' element={<ProductFinalCostMaster />} />
        </>
    )
}