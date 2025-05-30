import { Routes, Route, Navigate } from "react-router-dom";
import HomeView from "../../features/homeView";
import ProfileView from "../../features/profileView";
import PostView from "../../features/postView";
import LoginView from "../../features/authentication/loginView";
import RegisterView from "../../features/authentication/registerView";
import PostFormView from "../../features/postFormView";
import { useAuth } from "../../utils/authContext";

const Body = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/profile/:id" element={<ProfileView />} />
        <Route
          path="/post/:id"
          element={isAuthenticated ? <PostView /> : <LoginView />}
        />
        <Route
          path="/post/create/"
          element={isAuthenticated ? <PostFormView /> : <LoginView />}
        />
        <Route path="/post/update/:id" element={<PostFormView />} />
      </Routes>
    </div>
  );
};

export default Body;
