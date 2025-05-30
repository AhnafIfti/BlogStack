import { useNavigate } from "react-router-dom";
import { registerUser } from "../../utils/axios-utils";
import { UserRegister } from "../../components/body/bodyComponents/authentication/userRegister";
// import { useAuth } from "../../utils/authContext";

const RegisterView = () => {
  const navigate = useNavigate();
  const handleSubmit = async (postData) => {
    try {
      const result = await registerUser(postData);
      if (result.success) {
        navigate(`/login`);
        console.log(result);
      } else {
        console.error(result.message);
      }
      console.log(postData);
    } catch (err) {
      console.error(err);
    }
  };

  return <UserRegister handleSubmit={handleSubmit} />;
};

export default RegisterView;
