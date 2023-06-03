// import React from "react";
import { Navigate } from "react-router-dom";
import { getSessionStorage } from "../services/storage.service";
import Home from "../pages/Home";
import LoginPage from "../pages/Login.jsx";

const ProtectedRoutes = () => {
  const auth = getSessionStorage("loggedInUserAuth");
  return auth ? (
    <>
      <Navigate to="/home" />
      <Home />
    </>
  ) : (
    <>
      <Navigate to="/login" />
      <LoginPage />
    </>
  );
};

export default ProtectedRoutes;
