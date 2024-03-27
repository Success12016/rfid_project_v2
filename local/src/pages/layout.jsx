import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    /*<>
      <nav>
        <ul>
          <li>
            <Link to="/quantity">จำนวน</Link>
          </li>
          <li>
            <Link to="/detail">รายละเอียด</Link>
          </li>
          <li>
            <Link to="/history">ประวัติซื้อขาย</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>*/
    <Navbar expand="xl" className="navbar navbar-expand-lg bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Gold Inventory System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/quantity">จำนวน</Nav.Link>
            <Nav.Link href="/detail">รายละเอียด</Nav.Link>
            <Nav.Link href="/history">ประวัติซื้อขาย</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Outlet />
    </Navbar>
  )
};

export default Layout;