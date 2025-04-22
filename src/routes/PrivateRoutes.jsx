import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { account } = useAuth();
  if (!account) return <Navigate to="/" />;
  return children;
};

export default PrivateRoutes;
