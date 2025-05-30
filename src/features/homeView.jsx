import Home from "../components/body/bodyComponents/home";
import { searchPost, loggedInUsers } from "../utils/axios-utils";
import { useEffect, useState } from "react";
import { useAuth } from "../utils/authContext";

const HomeView = () => {
  const [post, setPost] = useState({ postList: [] });
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authUpdate } = useAuth();

  const fetchPost = async (searchValue = "") => {
    try {
      const result = await searchPost(searchValue);
      setPost(result);
    } catch (err) {
      setError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const fetchActiveUser = async () => {
    try {
      const result = await loggedInUsers();
      setUser(result);
      authUpdate(result);
    } catch (err) {
      setError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchActiveUser();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Home posts={post} fetchPost={fetchPost} users={user} />
    </div>
  );
};

export default HomeView;
