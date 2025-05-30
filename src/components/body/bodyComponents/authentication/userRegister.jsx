import { useState } from "react";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";

export const UserRegister = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !fullname || !confPassword || !email) {
      setErrorMsg("Please enter the fields");
      return;
    }
    if (password && confPassword && password != confPassword) {
      setErrorMsg("Password didn't match");
      return;
    }
    const postData = {
      email: email,
      username: username,
      fullname: fullname,
      password: password,
    };
    handleSubmit(postData);
  };

  return (
    <Container>
      <Row>
        <Col lg={2} md={12}></Col>
        <Col lg={8} md={12}>
          <Col className="my-2">
            <Row>
              <Col md={12} className="my-4 mb-lg-0 mb-md-3">
                <h2 className="my-4 text-center">Register</h2>
                {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter fullname"
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Col>
        <Col lg={2} md={12}></Col>
      </Row>
    </Container>
  );
};
