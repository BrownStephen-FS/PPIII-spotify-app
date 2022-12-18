import React from "react";

const Footer = (props) => {
  return (
    <footer style={styles.footer} id="footerBar">
      <div>
        <h5 style={styles.h5}>Created by Stephen Brown</h5>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    padding: "0.5%",
    backgroundColor: "#1DB954",
    position: "fixed",
    width: "100%",
    bottom: "0",
  },
  h5: {
    color: "#191414",
    textAlign: "center",
    fontSize: "1rem",
  },
};
