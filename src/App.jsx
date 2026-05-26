import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import SplashScreen from "./components/SplashScreen/SplashScreen";
import Login from "./Pages/Home/Home";
import Layout from "./components/Layout/Layout";

import Dashboard from "./Pages/Dashboard";

import Customers from "./Pages/Users/Customers";
import ServiceProviders from "./Pages/Users/ServiceProviders";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />


      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />

        <Route path="users">
          <Route path="customers" element={<Customers />} />

          <Route path="service-providers" element={<ServiceProviders />} />
        </Route>
      </Route>
    </Routes>
  );
}
