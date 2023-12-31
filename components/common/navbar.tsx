import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const GlobalNavbar = () => {
  const path = usePathname();
  useEffect(() => {
    console.log('### path: ', path);
  }, [path]);

  return (
    <>
      <Nav className="navbar navbar-expand bg-primary mb-2" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/posts">Post</a>
            </li>
          </ul>
        </Navbar.Collapse>
        </Container>
      </Nav>
    </>
  );
};

export default GlobalNavbar;