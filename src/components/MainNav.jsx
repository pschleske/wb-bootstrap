import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


export default function MainNav({ brand, leftLinks, rightLinks }) {
  return (
    <NavBar expand="lg" className="bg-success navbar-dark">
      <Container fluid>
        <NavBar.Brand href="/">{brand}</NavBar.Brand>
        <NavBar.Toggle />
        <NavBar.Collapse>
          <Nav className='me-auto'>
            {leftLinks.map(({ url, text }, index) => (
              <Nav.Link key={index} href={url}>{text}</Nav.Link>
            ))}
          </Nav>
          <Nav>
            {rightLinks.map(({ url, text }, index) => (
              <Nav.Link key={index} href={url}>{text}</Nav.Link>
            ))}
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );

  //   <nav>
  //     <a href="/">{brand}</a>
  //     <ul>
  //       {leftLinks.map(({ url, text }) => (
  //         <li key={text}>
  //           <a href={url}>{text}</a>
  //         </li>
  //       ))}
  //     </ul>
  //     <ul>
  //       {rightLinks.map(({ url, text }) => (
  //         <li key={text}>
  //           <a href={url}>{text}</a>
  //         </li>
  //       ))}
  //     </ul>
  //   </nav>
  // );
}
