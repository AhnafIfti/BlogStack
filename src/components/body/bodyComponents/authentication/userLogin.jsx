import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

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
    handleSubmit(username, password); // Pass values to parent
  };

  return (
    <Container>
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
    </Container>
  );
};
