import { Route } from 'react-router-dom';
import MenuTypeMaster from "../ModuleAndSubmodule/Admin/MenuTypeMaster";
import SubModuleMasterAdd from "../ModuleAndSubmodule/Admin/SubModuleMasterAdd";
import LocationLevelMaster from "../ModuleAndSubmodule/Admin/Location/LocationLevelMaster";
import CountryMaster from "../ModuleAndSubmodule/Admin/Location/CountryMaster";
import AdminDashboard from '../ModuleAndSubmodule/Admin/AdminDashboard';
import CommonScreen from '../Structure/CommonScreen';
import BrandMaster from '../ModuleAndSubmodule/Admin/BrandMaster';
import RouteMaster from '../ModuleAndSubmodule/Admin/RoleMaster';
import LocationLevel2Master from '../ModuleAndSubmodule/Admin/Location/LocationLevel2Master';
import LocationLevel3Master from '../ModuleAndSubmodule/Admin/Location/LocationLevel3Master';
import LocationLevel4Master from '../ModuleAndSubmodule/Admin/Location/LocationLevel4Master';
import LocationLevel5Master from '../ModuleAndSubmodule/Admin/Location/LocationLevel5Master';
import CommonData from '../ModuleAndSubmodule/Admin/CommonData';
import CountryCurrencyMaster from '../ModuleAndSubmodule/Admin/CountryCurrencyMaster';

export default function AdminMenus() {
    return (
        <>
            <Route path='/' element={<CommonScreen />}>
                <Route path="configuration/menu-type-master" element={<MenuTypeMaster />} />
                <Route path="submodule/add" element={<SubModuleMasterAdd />} />
                <Route path="location-master/add" element={<LocationLevelMaster />} />
                <Route path="country-master/add" element={<CountryMaster />} />
                <Route path='admin/dashboard' element={<AdminDashboard />} />
                <Route path='admin/brand-master' element={<BrandMaster />} />
                <Route path='admin/location-level2' element={<LocationLevel2Master />} />
                <Route path='admin/location-level3' element={<LocationLevel3Master />} />
                <Route path='admin/location-level4' element={<LocationLevel4Master />} />
                <Route path='admin/location-level5' element={<LocationLevel5Master />} />
                <Route path='admin/common-data' element={<CommonData />} />
                <Route path='admin/country-currency-master' element={<CountryCurrencyMaster />} />
            </Route>
        </>
    )
}