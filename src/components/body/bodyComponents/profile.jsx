import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useAuth } from "../../../utils/authContext";
import { useSubscribe, useUnsubscribe } from "../../../hooks/useSubscribe";

const Profile = (props) => {
  // const { isAuthenticated, loggedInUser } = useAuth();
  const subscribe = useSubscribe();
  const unsubscribe = useUnsubscribe();
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

  return (
    <Container>
      <Row>
        <Col lg={2} md={12}></Col>
        <Col lg={8} md={12}>
          <Col className="my-2">
            <Row>
              <Col lg={6} md={12} className="my-4 mb-lg-0 mb-md-3">
                <h5 className="my-2 px-4">{props.profile.author.fullname}</h5>
                <span className="px-4">
                  Total Posts: {props.profile.postList.length}
                </span>
              </Col>
              <Col
                lg={6}
                md={12}
                className="d-flex justify-content-lg-end justify-content-md-start"
              >
                <div className="d-flex gap-2 align-items-center w-100 justify-content-lg-end justify-content-md-start px-4">
                  {props.isAuthenticated &&
                    props.loggedInUser._id !== props.profile.author._id &&
                    (props.loggedInUser.isFollowing?.includes(
                      props.profile.author._id
                    ) ? (
                      <Button
                        variant="info"
                        onClick={() =>
                          unsubscribe(
                            props.loggedInUser._id,
                            props.profile.author._id
                          )
                        }
                      >
                        Unsubscribe
                      </Button>
                    ) : (
                      <Button
                        variant="success"
                        onClick={() =>
                          subscribe(
                            props.loggedInUser._id,
                            props.profile.author._id
                          )
                        }
                      >
                        Subscribe
                      </Button>
                    ))}
                  {props.isAuthenticated &&
                    props.loggedInUser._id === props.profile.author._id && (
                      <Button variant="info" as={Link} to={"/post/create"}>
                        Add New
                      </Button>
                    )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
                {/* <div className="mb-4">{props.post.post.content}</div> */}
                {props.profile.postList &&
                  props.profile.postList.map((post) => (
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
                            {props.isAuthenticated &&
                              props.loggedInUser._id == post.createdBy && (
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
            </Row>
          </Col>
        </Col>
        <Col lg={2} md={12}></Col>
      </Row>
    </Container>
  );
};

export default Profile;
