import { useLogout } from "../../hooks/useLogout";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuth } from "../../utils/authContext";

const Navigate = () => {
  const { isAuthenticated, loggedInUser } = useAuth();
  const logout = useLogout();
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="p-4"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            {isAuthenticated && loggedInUser && (
              <Nav.Link href={`/profile/${loggedInUser._id}`}>Profile</Nav.Link>
            )}
          </Nav>
          <Nav>
            {isAuthenticated && loggedInUser ? (
              <>
                <Nav.Link>{loggedInUser.username}</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigate;
