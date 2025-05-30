import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../../utils/authContext";

const Home = ({ posts, fetchPost, users }) => {
  const [getSearchList, setSearchList] = useState([]);
  const [getSearchData, setSearchData] = useState("");
  const { isAuthenticated, loggedInUser } = useAuth();
  const [getActiveUsers, setActiveUsers] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    await fetchPost(getSearchData);
  };

  function formatToCustomDate(isoDateString) {
    const date = new Date(isoDateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${month}-${day}-${year} at ${hours}:${minutes} ${ampm}`;
  }

  useEffect(() => {
    if (posts?.postList?.length) {
      setSearchList(posts.postList);
    } else {
      setSearchList([]);
    }
  }, [posts, users]);

  useEffect(() => {
    if (isAuthenticated && loggedInUser) {
      const tempUser = users.filter((user) => user.id !== loggedInUser._id);
      setActiveUsers(tempUser);
    }
  }, [users, loggedInUser, isAuthenticated]);

  return (
    <Container>
      <Row>
        <Col lg={2} md={12}>
          <Col className="m-2">
            {isAuthenticated && (
              <Card className="m-3">
                <Card.Header className="text-center">Active Users</Card.Header>
                <Card.Body>
                  <ListGroup className="list-group-flush">
                    {getActiveUsers.length !== 0 ? (
                      getActiveUsers.map((user) => (
                        <ListGroup.Item
                          key={user.id}
                          className="text-center text-decoration-none text-success"
                          as={Link}
                          to={`/profile/${user.id}`}
                        >
                          {user.fullname}
                        </ListGroup.Item>
                      ))
                    ) : (
                      <ListGroup.Item className="text-center">
                        No Active Users
                      </ListGroup.Item>
                    )}
                  </ListGroup>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Col>
        <Col lg={6} md={12}>
          {getSearchList &&
            getSearchList.map((post) => (
              <Col key={post._id} className="my-2">
                <Card className="m-3 border-bottom">
                  <Card.Body className="px-4">
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {post.createdBy.fullname}
                    </Card.Subtitle>
                    <Card.Text>
                      {post.content.length > 200
                        ? `${post.content.substring(0, 200)}...`
                        : post.content}
                    </Card.Text>
                    <Card.Text>
                      <small className="text-muted">
                        Created By {post.createdBy.fullname} on{" "}
                        {formatToCustomDate(post.createdAt)}
                      </small>
                    </Card.Text>
                    <Col className="d-flex gap-2">
                      <Button
                        variant="primary"
                        as={Link}
                        to={`/post/${post._id}`}
                      >
                        Visit
                      </Button>
                      {isAuthenticated &&
                        loggedInUser._id === post.createdBy._id && (
                          <>
                            <Button
                              variant="warning"
                              as={Link}
                              to={`/post/update/${post._id}`}
                            >
                              Edit
                            </Button>
                            <Button variant="danger">Delete</Button>
                          </>
                        )}
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Col>
        <Col lg={4} md={12}>
          <Col className="m-2">
            <Form onSubmit={handleSearch}>
              <Form.Group className="my-3 d-flex gap-2">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={getSearchData}
                  onChange={(e) => setSearchData(e.target.value)}
                />
                <Button type="submit" variant="primary">
                  Search
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
