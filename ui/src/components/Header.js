import React from "react";
import { Link } from "react-router-dom";
import ImageUrl from "../images/spotify-logo.jpeg";

const Header = () => {
  return (
    <header style={styles.header} id="headerBar">
    </header>
  );
};

export default Header;

const styles = {
  header: {
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1DB954",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};
