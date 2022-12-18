import React from "react";
import { Link } from "react-router-dom";
import ImageUrl from "../images/spotifyLogo.png";

const Header = () => {
  return (
    <header style={styles.header} id="headerBar">
      <Link to="/main">
        <img style={styles.logo} src={ImageUrl} alt="Spotify Logo" />
      </Link>
      <div style={styles.container}>
        <h1 style={styles.h1}>Signup</h1>
        <Link to="/" id="logout">
          <h1 style={styles.h1}>Logout</h1>
        </Link>
      </div>
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
  },
  logo: {
    width: "5rem",
    borderRadius: "20px",
  },
  h1: {
    color: "#191414",
    marginRight: "2rem"
  },
};
