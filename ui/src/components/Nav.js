import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={styles.container} id="navBar">
    </nav>
  );
};

export default Nav;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    backgroundColor: "#1DB954",
  },
  links: {
    padding: "1rem",
    textAlign: "center",
    display: "block",
    marginTop: "3rem",
    fontSize: "3rem",
  },
};
