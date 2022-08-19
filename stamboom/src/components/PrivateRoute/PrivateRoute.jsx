import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSession } from "../../context/AuthProvider";

export default function PrivateRoute() {
  const { isAuthed } = useSession();
  const { pathname } = useLocation();

  return isAuthed ? <Outlet /> : <Navigate to="/" />;
}
