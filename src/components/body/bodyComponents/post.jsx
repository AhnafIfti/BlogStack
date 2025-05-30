import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../../utils/authContext";

const Post = (props) => {
  const { isAuthenticated, loggedInUser } = useAuth();
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
              <Col className="my-2">
                <h2 className="my-4 fw-bold text-center">
                  {props.post.post.title}
                </h2>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={12} className="mb-lg-0 mb-md-3">
                <Link
                  to={`/profile/${props.post.post.createdBy._id}`}
                  className="text-success text-decoration-none"
                >
                  <h5>{props.post.post.createdBy.fullname}</h5>
                </Link>
                <span>{formatToCustomDate(props.post.post.createdAt)}</span>
              </Col>
              <Col
                lg={6}
                md={12}
                className="d-flex justify-content-lg-end justify-content-md-start"
              >
                <div className="d-flex gap-2 align-items-center w-100 justify-content-lg-end justify-content-md-start">
                  {isAuthenticated &&
                    loggedInUser == props.post.post.createdBy.fullname && (
                      <>
                        <Button variant="secondary" as={Link} to="/home">
                          Middle
                        </Button>
                        <Button variant="secondary" as={Link} to="/home">
                          Right
                        </Button>
                      </>
                    )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
                <div className="mb-4">{props.post.post.content}</div>
              </Col>
            </Row>
          </Col>
        </Col>
        <Col lg={2} md={12}></Col>
      </Row>
    </Container>
  );
};

export default Post;
