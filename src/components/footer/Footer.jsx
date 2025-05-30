import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faXTwitter,
//   faLinkedinIn,
//   faInstagram,
//   faFacebookF,
// } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-3">
      <Container className="py-4">
        <Row>
          <Col md={4} className="px-4">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              fugiat illo tenetur exercitationem vero nostrum temporibus
              recusandae est dolor molestiae, voluptates aliquam, reiciendis
              perferendis accusamus maxime voluptatibus eos. Omnis, quia.
            </p>
          </Col>
          <Col md={4} className="px-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: +1233567890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </Col>
          <Col md={4} className="px-4">
            <h5>Follow Us</h5>
            {/* <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul> */}
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col className="text-center">
            <p>All rights reserved | &copy; 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
