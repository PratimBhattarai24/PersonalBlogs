import React, { useState } from "react";
import Image from "next/image";
import image from "../../../public/fb-icon.svg";
import tweet from "../../../public/twitter.svg";
import insta from "../../../public/instagram.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import style from "./navbar.module.scss";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={style.header}>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" id={style.logo}>
          Pratim Bhattarai
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Articles</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Books</NavLink>
            </NavItem>{" "}
            <NavItem>
              <NavLink href="#">Newsletter</NavLink>
            </NavItem>{" "}
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>{" "}
            <NavItem>
              <NavLink href="#">Subscription</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <Image src={image} />
              </NavLink>
            </NavItem>{" "}
            <NavItem>
              <NavLink href="#">
                <Image src={tweet} width={24} height={24} />
              </NavLink>
            </NavItem>{" "}
            <NavItem>
              <NavLink href="#">
                <Image src={insta} width={24} height={24} />
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
