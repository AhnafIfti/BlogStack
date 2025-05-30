import { useState } from "react";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";
import { loginWithGoogle } from "../../../../utils/axios-utils";

export const UserLogin = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMsg("Please enter username and password.");
      return;
    }
    handleSubmit(username, password);
  };

  return (
    <Container>
      <Row>
        <Col lg={2} md={12}></Col>
        <Col lg={8} md={12}>
          <Col className="my-2">
            <Row>
              <Col md={12} className="my-4 mb-lg-0 mb-md-3">
                <h2 className="my-4 text-center">Login</h2>
                {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
                <Form onSubmit={onSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
                <Button
                  variant="danger"
                  className="mt-4"
                  onClick={loginWithGoogle}
                >
                  Google Login
                </Button>
              </Col>
            </Row>
          </Col>
        </Col>
        <Col lg={2} md={12}></Col>
      </Row>
    </Container>
  );
};
