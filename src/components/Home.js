import React from "react";
import data from "./data.json"; // Importing JSON data

const Main = () => {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    color: "#ffffff",
    background: "#000000",
    minHeight: "100vh",
    padding: "20px",
  };

  const centerTextStyle = {
    textAlign: "center",
    fontSize: "2rem",
    margin: "40px 0",
  };

  const highlightedText = {
    color: "#007BFF",
  };

  const boxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px auto",
    padding: "20px",
    background: "#1a1a1a",
    border: "1px solid #333",
    borderRadius: "8px",
    maxWidth: "800px",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    marginRight: "20px",
    borderRadius: "8px",
  };

  const featureListStyle = {
    marginTop: "10px",
    color: "#ccc",
  };

  const cardContainerStyle = {
    marginTop: "40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "0 20px",
  };

  const cardStyle = {
    background: "#1a1a1a",
    color: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #333",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  };

  const cardImageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "15px",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.7)",
  };

  const linkStyle = {
    color: "#007BFF",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      {/* Centered Text */}
      <h1 style={centerTextStyle}>
        The Fastest Way To <span style={highlightedText}>Buy Website</span>
      </h1>

      {/* Box Section */}
      <div style={boxStyle}>
        <img
          src="https://th.bing.com/th/id/OIP.Roqsg9HCziN6sGkmIShDDAHaEC?w=248&h=184&c=7&r=0&o=5&pid=1.7"
          alt="Platform Image"
          style={imageStyle}
        />
        <div>
          <h2>Best Platform For Website Deals</h2>
          <ul style={featureListStyle}>
            <li>✔ Create new website</li>
            <li>✔ Purchase existing website</li>
            <li>✔ Quality product</li>
            <li>✔ Budget-friendly and secured</li>
          </ul>
        </div>
      </div>

      {/* Listed Websites Section */}
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>
        Listed Websites
      </h2>
      <div style={cardContainerStyle}>
        {data.map((item, index) => (
          <div
            key={index}
            style={cardStyle}
            // onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
            // onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
          >
            <img
              src={item.pic || "https://via.placeholder.com/300"}
              alt={item.title}
              style={cardImageStyle}
            />
            <h4 style={{color: "blue"}}>Available</h4>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p style={{ fontWeight: "800", color: "Highlight" }}>
              Price: {item.price}
            </p>
            <a
              href={
                item.url.startsWith("http") ? item.url : `https://${item.url}`
              }
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Visit Website
            </a>
            <div style={{ marginTop: "10px" }}>
              <a
                href={item.insta}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                📸 Instagram
              </a>
              <p style={{ marginTop: "10px" }}>Email: {item.gmail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
