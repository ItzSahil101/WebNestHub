import React from "react";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#000000",
    borderBottom: "1px solid #444",
    color: "#ffffff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#ffffff",
    textDecoration: "none",
  };

  const logoImageStyle = {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  };

  return (
    <nav style={navbarStyle}>
      <a href="/" style={logoStyle}>
        <img
          src="./WebNestHub_Logo_Cropped.png"
          alt="Logo"
          style={logoImageStyle}
        />
        WebNestHub
      </a>
    </nav>
  );
};

export default Navbar;
