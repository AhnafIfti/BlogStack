import Post from "../components/body/bodyComponents/post";
import { getPostById } from "../utils/axios-utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../utils/authContext";

const PostView = () => {
  const { isAuthenticated, loggedInUser } = useAuth();
  const { id } = useParams();
  const [data, setData] = useState({ postList: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = async (id) => {
    try {
      const result = await getPostById(id);
      setData(result);
    } catch (err) {
      setError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost(id);
  }, [id, isAuthenticated, loggedInUser]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Post
        post={data}
        isAuthenticated={isAuthenticated}
        loggedInUser={loggedInUser}
      />
    </div>
  );
};

export default PostView;
