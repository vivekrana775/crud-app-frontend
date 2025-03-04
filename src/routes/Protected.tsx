import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoadingIndicator from "../shared/Loading/LoadingIndicator";
import Cookies from "js-cookie";

interface ProtectedRoutesProps {}

const Protected: React.FC<ProtectedRoutesProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState("");
  useEffect(() => {
    setLoading(true);
    const userToken = Cookies.get("jstoken");
    if (userToken) {
      setToken(userToken);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {}, [token]);

  if (loading) {
    return <LoadingIndicator />;
  }
  return token !== undefined && token !== "" && token !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default Protected;
