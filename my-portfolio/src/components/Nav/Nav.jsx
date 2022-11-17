import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link, Navigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {CgGitFork} from "react-icons/cg";
import {ImBlog} from "react-icons/im";
import logo from "../../assets/full_name.png";
import {
  AiFillStar,
  AiOutlineHome,
  AiTwotoneThunderbolt,
  AiOutlineUser,
} from "react-icons/ai";
import "./Nav.css";
import {CgFileDocument} from "react-icons/cg";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="initials">BA</div>
      </Link>

      <div className="links-container">
        <Link to="/" className="link">
          <AiOutlineHome style={{marginBottom: "2px"}} />
          <p>Home</p>
        </Link>

        <Link to="/about" className="link">
          <AiOutlineUser style={{marginBottom: "2px"}} />
          <p>About</p>
        </Link>

        <Link to="/projects" className="link">
          <AiTwotoneThunderbolt style={{marginBottom: "2px"}} />
          <p>Projects</p>
        </Link>

        <Link to="/resume" className="link">
          <CgFileDocument style={{marginBottom: "2px"}} />
          <p>Resume</p>
        </Link>

        <Nav.Link
          href="https://github.com/Brandon-Alvarez-03"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillStar style={{marginTop: "3px"}} />
          <CgGitFork style={{marginTop: "3px"}} />
        </Nav.Link>
      </div>
    </div>
  );
}

export default NavBar;
