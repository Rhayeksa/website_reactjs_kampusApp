import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ marginBottom: 30 }}>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/home">Kampus</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Mahasiswa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Dosen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Mata Kuliah</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Hasil Study</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
