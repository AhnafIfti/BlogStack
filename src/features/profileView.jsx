import Profile from "../components/body/bodyComponents/profile";
import { getProfileDetail } from "../utils/axios-utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../utils/authContext";

const ProfileView = () => {
  const { isAuthenticated, loggedInUser } = useAuth();
  const { id } = useParams();
  const [data, setData] = useState({ postList: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = async (id) => {
    try {
      const result = await getProfileDetail(id);
      setData(result);
    } catch (err) {
      setError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Profile
        profile={data}
        isAuthenticated={isAuthenticated}
        loggedInUser={loggedInUser}
      />
    </div>
  );
};

export default ProfileView;
