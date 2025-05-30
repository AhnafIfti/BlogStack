import { useState, useEffect } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { WithContext as ReactTags } from "react-tag-input";

const PostForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.post.title || "");
      setContent(initialData.post.content || "");
      setTags(
        initialData.post.tags
          ? initialData.post.tags.map((tag, id) => ({
              id: String(id),
              text: tag,
            }))
          : []
      );
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagTexts = tags.map((tag) => tag.text);
    const postData = {
      title,
      content,
      tags: [tagTexts.join(", ")],
    };
    onSubmit(postData);
  };

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  return (
    <Container>
      <Row>
        <Col lg={2} md={12}></Col>
        <Col lg={8} md={12}>
          <Col className="m-3">
            <Col className="my-4">
              <h3>{isEdit ? "Create Post" : "Edit Post"}</h3>
            </Col>
            <Col className="my-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    placeholder="Enter post title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={content}
                    placeholder="Enter post content"
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tags</Form.Label>
                  <ReactTags
                    tags={tags}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    inputFieldPosition="bottom"
                    autocomplete
                  />
                </Form.Group>

                <Button variant={isEdit ? "warning" : "success"} type="submit">
                  {isEdit ? "Edit" : "Create"}
                </Button>
              </Form>
            </Col>
          </Col>
        </Col>
        <Col lg={2} md={12}></Col>
      </Row>
    </Container>
  );
};

export default PostForm;
