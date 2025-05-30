import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createPost, updatePost, getPostById } from "../utils/axios-utils";
import PostForm from "../components/body/bodyComponents/postForm";
import { useAuth } from "../utils/authContext";

const PostFormView = () => {
  const { isAuthenticated, loggedInUser } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      getPostById(id)
        .then((data) => setInitialData(data))
        .catch((err) => console.error("Error fetching post:", err));
    }
  }, [id]);

  const handleSubmit = async (postData) => {
    try {
      if (!isAuthenticated) {
        navigate("/login");
      }
      if (isEdit) {
        await updatePost(loggedInUser._id, id, postData);
        alert("Post updated successfully!");
      } else {
        await createPost(postData, loggedInUser._id);
        alert("Post created successfully!");
      }
      navigate("/home");
    } catch (err) {
      console.error("Error submitting post:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <PostForm
      onSubmit={handleSubmit}
      initialData={initialData}
      isEdit={isEdit}
    />
  );
};

export default PostFormView;
