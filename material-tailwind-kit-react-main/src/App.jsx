import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from "@/widgets/layout"; // Adjust the import path as necessary
import routes from "@/routes"; // Assuming this file contains your main routes
import SignIn from '@/pages/sign-in';
import Dashboard from '@/pages/Dashboard';
import AdminPage from '@/pages/AdminPage'; // Import the AdminPage
import MedicalPage from '@/pages/MedicalPage'; // Import the MedicalPage
import DoctorPage from '@/pages/DoctorPage'; // Import the DoctorPage
import ReceptionistPage from '@/pages/ReceptionistPage'; // Import the ReceptionistPage

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {!(pathname === '/sign-in' || pathname === '/sign-up') && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      )}
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        {/* Add routes for SignIn, Dashboard, and role-specific pages */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/medical" element={<MedicalPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/receptionist" element={<ReceptionistPage />} />

        {/* Redirect unknown paths to the home page */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
}

export default App;
