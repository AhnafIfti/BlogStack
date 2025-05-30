import { Routes, Route, Navigate } from "react-router-dom";
import HomeView from "../../features/homeView";
import ProfileView from "../../features/profileView";
import PostView from "../../features/postView";
import LoginView from "../../features/authentication/loginView";
import PostFormView from "../../features/postFormView";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/profile/:id" element={<ProfileView />} />
        <Route path="/post/:id" element={<PostView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/post/create/" element={<PostFormView />} />
        <Route path="/post/update/:id" element={<PostFormView />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </div>
  );
};

export default Body;
