import React from "react";
import Button from "react-bootstrap/Button";

function Main() {
  return (
    <section style={styles.section}>
      <h2>Search for artist...</h2>
      <input type="text" placeholder="Weird Al Yankovic" style={styles.input} />
      <div style={styles.div}>
        <Button style={styles.button} type="submit">
          Search
        </Button>
      </div>
    </section>
  );
}

export default Main;

const styles = {
  section: {
    marginTop: "10rem",
    display: "flex",
    flexDirection: "column",
    marginLeft: "40rem",
    color: "white",
    fontSize: "2rem",
  },
  input: {
    fontSize: "2rem",
    color: "#1DB954",
    backgroundColor: "#191414",
    border: "none",
    textAlign: "center",
  },
  div: {
    margin: "5rem 8rem"
  },
  button: {
    width: "8rem",
    borderRadius: "10px",
    fontSize: "2rem",
    color: "white",
    backgroundColor: "#1DB954",
  },
};
/*
Spotify green: #1DB954
Spotify black: #191414
*/
