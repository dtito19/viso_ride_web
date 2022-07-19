import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
// import Boda_Driver_Register from "./pages/register_driver_page";
import RegisterStationPage from "./pages/Register_Station_Page";
import RegisterDriverPage from "./pages/Register_Driver_Page";

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/registerStation" element={<RegisterStationPage/>} />
        <Route path="/driverRegister" element={<RegisterDriverPage/>} />
        <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
        {/* <Route
          path="/"
          element={
            auth ? (
              <Home setAuth={setAuth} />
            ) : (
              <Navigate to="/" state={{ from: location }} replace />
            )
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
