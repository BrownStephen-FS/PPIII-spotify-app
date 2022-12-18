import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section style={styles.section}>
      <h2>Please Login</h2>
      <p style={styles.p}>
        In order to search for artists, tracks, or songs, you must login to your
        Spotify account
      </p>
      <div>
        <Link to="/main" style={styles.icon}>
          <Button style={styles.button} type="submit">
            Login
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Login;

const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "42rem",
    marginTop: "10rem",
    color: "white",
    textAlign: "center",
    fontSize: "2rem",
  },
  p: {
    width: "25rem",
  },
  button: {
    width: "8rem",
    borderRadius: "10px",
    fontSize: "2rem",
    color: "white",
    backgroundColor: "#1DB954",
  },
};
