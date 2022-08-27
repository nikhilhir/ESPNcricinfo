import { MoonIcon } from "@chakra-ui/icons";
import { Icon, Input } from "@chakra-ui/react";
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import MainSubNavbar from "./NavbarItems/MainSubNavbar";
import {
  BsFillMoonFill,
  BsBellFill,
  BsFillGrid3X3GapFill,
  BsSearch,
} from "react-icons/bs";
import Example from "./NavbarItems/Edition";
import Edition from "./NavbarItems/Edition";
import Livescore from "../LiveScore/Livescore";
const NavbarComponent = () => {
  const NAV_ITEMS = [
    {
      label: "Live Score",
      href: "#",
      children: [
        {
          label: "Live Scores Home",
          href: "#",
        },
        {
          label: "Week view",
          href: "#",
        },
        {
          label: "Month view",
          href: "#",
        },
        {
          label: "Season view",
          href: "#",
        },
        {
          label: "International calender",
          href: "#",
        },
        {
          label: "Desktop scorecard",
          href: "#",
        },
      ],
    },
    {
      label: "Series",
      href: "#",
      children: [
        {
          label: "Asia Cup",
          href: "#",
        },
        {
          label: "NZ-A in Ind",
          href: "#",
        },
        {
          label: "Australia Vs Zimbabwe",
          href: "#",
        },
        {
          label: "Australia Vs Zimbabwe",
          href: "#",
        },
        {
          label: "Australia Vs Zimbabwe",
          href: "#",
        },
      ],
    },
    {
      label: "Teams",
      href: "#",
      children: [
        {
          label: "India",
          href: "#",
        },
        {
          label: "Pakistan",
          href: "#",
        },
        {
          label: "Srilanks",
          href: "#",
        },
        {
          label: "Australia",
          href: "#",
        },
        {
          label: "England",
          href: "#",
        },
        {
          label: "Bangladesh",
          href: "#",
        },
        {
          label: "New Zealand",
          href: "#",
        },
      ],
    },
    {
      label: "News",
      children: [
        {
          label: "News Home",
          href: "#",
        },
        {
          label: "Feature of ODI",
          href: "#",
        },
        {
          label: "Ball Temparing",
          href: "#",
        },
      ],
    },
    {
      label: "Features",
      children: [
        {
          label: "Features Home",
          href: "#",
        },
        {
          label: "Australia Vs Zimbabwe",
          href: "#",
        },
        {
          label: "Australia Vs Zimbabwe",
          href: "#",
        },
        {
          label: "Australia Vs Zimbabwe",
          href: "#",
        },
      ],
    },
    {
      label: "Videos",
      children: [
        {
          label: "Sachin's Best",
          href: "#",
        },
        {
          label: "Cricket",
          href: "#",
        },
        {
          label: "Aus Video",
          href: "#",
        },
        {
          label: "Eng Funny",
          href: "#",
        },
      ],
    },
    {
      label: "Stats",
      children: [
        {
          label: "IPL 2022",
          href: "#",
        },
        {
          label: "World Cup",
          href: "#",
        },
        {
          label: "ODI Ranking",
          href: "#",
        },
        {
          label: "Batsman Ranking",
          href: "#",
        },
      ],
    },
    {
      label: "Edition",
      children: [
        {
          label: "India",
          href: "#",
        },
        {
          label: "Australia",
          href: "#",
        },
        {
          label: "Pakistan",
          href: "#",
        },
        {
          label: "Sri Lanka",
          href: "#",
        },
        {
          label: "Bangladesh",
          href: "#",
        },
        {
          label: "England",
          href: "#",
        },
      ],
    },
  ];
  return (
    <Navbar variant="dark" sticky="top" style={{ backgroundColor: "#03a9f4" }}>
      <Container style={{ marginLeft: "10px" }}>
        <Navbar.Brand href="#home">
          <img
            src="https://wassets.hscicdn.com/static/images/logo.png"
            alt="espn logo"
            style={{ width: "138px", height: "20px" }}
          />
        </Navbar.Brand>
        <Nav className="me-auto" style={{ display: "flex", gap: "130px" }}>
          <Nav.Link
          // style={{ border: "2px solid black" }}
          >
            <MainSubNavbar NAV_ITEMS={NAV_ITEMS} />
          </Nav.Link>
          <Nav.Link
            style={{
              // border: "2px solid black",
              display: "flex",
              // justifyContent: "space-between",
              width: "310px",
              gap: "20px",
              alignItems: "center",
              color: "white",
            }}
          >
            <BsFillMoonFill />
            <BsBellFill />
            <p>Language</p>
            <BsFillGrid3X3GapFill />
            <BsSearch />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;




