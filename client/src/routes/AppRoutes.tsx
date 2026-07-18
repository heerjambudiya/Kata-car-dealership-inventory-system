import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Vehicles from "../pages/Vehicles/Vehicles";
import Inventory from "../pages/Inventory/Inventory";
import Sales from "../pages/Sales/Sales";
import NotFound from "../pages/NotFound/NotFound";

import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Application */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sales" element={<Sales />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;