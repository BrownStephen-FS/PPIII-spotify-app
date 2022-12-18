import React from "react";
import { Link } from "react-router-dom";
import {IoIosAlbums, IoIosMic} from "react-icons/io";
import {BsSoundwave} from "react-icons/bs"

const Nav = () => {
  return (
    <nav style={styles.container} id="navBar">
      <Link
        to="/albums"
        style={styles.links}
        className="navLink"
        title="Albums"
      >
        <IoIosAlbums />
      </Link>
      <Link
        to="/artists"
        style={styles.links}
        className="navLink"
        title="Artists"
      >
        <IoIosMic />
      </Link>
      <Link
        to="/songs"
        style={styles.links}
        className="navLink"
        title="songs"
      >
        <BsSoundwave/>
      </Link>
    </nav>
  );
};

export default Nav;

const styles = {
  container: {
    marginTop: "5px",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    backgroundColor: "#1DB954",
    height: "50rem",
  },
  links: {
    padding: "1rem",
    textAlign: "center",
    display: "block",
    marginTop: "3rem",
    fontSize: "3rem",
    color: "#191414"
  },
};
