import { useLocation, useNavigate } from "react-router-dom";

import getUser from "../hooks/useUser";

import UserType from "../types/UserType";

export const permission = (required: boolean | undefined): boolean => {
  const user = getUser();
  if (user || (!required ?? true)) return true;
  return false;
};

const RequireAuth = ({
  children,
  required,
  path = "/",
}: {
  children: JSX.Element;
  required?: boolean;
  path?: string;
}) => {
  const navigate = useNavigate();

  const location = useLocation();

  if (permission(required)) {
    return children;
  } else {
    navigate(path);
  }
};

export default RequireAuth;
