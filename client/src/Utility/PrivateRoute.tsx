import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = window.localStorage.getItem("token");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
