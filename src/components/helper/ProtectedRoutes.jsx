// import React from "react";
import { Navigate } from "react-router-dom";
import { getSessionStorage } from "../../services/storage.service";
import Home from "../../pages/Home";

const ProtectedRoutes = () => {
  const auth = getSessionStorage("loggedInUserAuth");
  return auth ? (
    <>
      <Home />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
