import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/axios-utils";
import { UserLogin } from "../../components/body/bodyComponents/Authentication/userLogin";
import { useAuth } from "../../utils/authContext";

const LoginView = () => {
  const navigate = useNavigate();
  const { authUpdate } = useAuth();
  const handleSubmit = async (username, password) => {
    try {
      const result = await loginUser(username, password);
      if (result.success) {
        // authUpdate(result.userId);
        authUpdate();
        // navigate(`/profile/${result.userId}`);
        navigate(`/home`);
      } else {
        console.error(result.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return <UserLogin handleSubmit={handleSubmit} />;
};

export default LoginView;
