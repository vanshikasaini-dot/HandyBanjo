import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import SplashScreen from "./components/SplashScreen/SplashScreen";
import Login from "./Pages/Login/LoginPage";
import Layout from "./components/Layout/Layout";

import Dashboard from "./Pages/Dashboard";

import Customers from "./Pages/UsersManagement/Customers";
import ServiceProviders from "./Pages/UsersManagement/ServiceProviders";
import HelperWorker from "./Pages/UsersManagement/HelperWorker";
import EnterpriseClient from "./Pages/UsersManagement/EnterpriseClient";
import BlockedUser from "./Pages/UsersManagement/BlockedUser";
import VerificationRequest from "./Pages/UsersManagement/VarificationRequest";
import AcService from "./Pages/ServiceManagement/AcService";
import Plumbing from "./Pages/ServiceManagement/Plumbing";
import KitchenService from "./Pages/ServiceManagement/KitchenService";
import Electrician from "./Pages/ServiceManagement/Electrician";
import AddServices from "./Pages/ServiceManagement/AddServices";
import DeepCleaning from "./Pages/ServiceManagement/DeepCleaning";
import ServicePricing from "./Pages/ServiceManagement/ServicePricing";
import AllBookings from "./Pages/BookingManagement/AllBookings";
import RescheduleRequest from ".//Pages/BookingManagement/RescheduleRequest";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />

      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        {/* SERVICES users */}
        <Route path="users">
          <Route path="customers" element={<Customers />} />
          <Route path="service-providers" element={<ServiceProviders />} />
          <Route path="helpers" element={<HelperWorker />} />
          <Route path="enterprise" element={<EnterpriseClient />} />
          <Route path="blocked" element={<BlockedUser />} />
          <Route path="verification" element={<VerificationRequest />} />
          <Route path="ac" element={<AcService />} />
        </Route>

        {/* SERVICES Mangement */}
        <Route path="services">
          <Route path="ac" element={<AcService />} />
          <Route path="plumbing" element={<Plumbing />} />
          <Route path="kitchen" element={<KitchenService />} />
          <Route path="electrician" element={<Electrician />} />
          <Route path="deep-cleaning" element={<DeepCleaning />} />
          <Route path="manage" element={<AddServices />} />
          <Route path="pricing" element={<ServicePricing />} />
        </Route>

        {/* BOOKING MANAGEMENT */}
        <Route path="bookings">
          <Route path="allbookings" element={<AllBookings />} />
          <Route path="reschedule" element={<RescheduleRequest />} />
        </Route>
      </Route>
    </Routes>
  );
}
