import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">MetarGrab</Navbar.Brand>
            <Navbar.Text>Grab all of the airport METARs</Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}
