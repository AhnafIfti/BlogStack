import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/axios-utils";
import { useAuth } from "../utils/authContext";

export const useLogout = () => {
  const navigate = useNavigate();
  const { authUpdate } = useAuth();

  const logout = async () => {
    try {
      const result = await logoutUser();
      if (result.success) {
        authUpdate(null);
        navigate("/login");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return logout;
};
