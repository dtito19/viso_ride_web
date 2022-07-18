import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import RegisterBoda from "./components/register_boda_station";
import Boda_Driver_Register from "./components/register_boda_driver";

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/registerBoda" element={<RegisterBoda/>} />
        <Route path="/bodaDriverRegister" element={<Boda_Driver_Register/>} />
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
