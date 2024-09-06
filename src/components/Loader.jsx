// export default Loader;
import React from "react";
import "../ComponentsCSS/Loader.css";
import logoImage from "../Assets/Logo.gif";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={logoImage} alt="Logo" />
    </div>
  );
};

export default Loader;
