import React from "react";
import "./Banner.css";
import "../App.css";
import { Button } from "./Button";

const Banner = () => {
  return (
    <div className="banner-container">
      <h1>Welcome to OCCI Cabling Solutions</h1>
      <p>
        We offer a comprehensive range of cabling services for all of your Data,
        LAN and CCTV requirements. Whether you are installing new
        infrastructure, refreshing current setups or adding to your existing
        LAN, contact us for a quote.
      </p>
      <div className="banner-btn">
        <Button
          className="btn"
          buttonSize="btn-outline"
          buttonStyle="btn-large"
          path="/contact-us"
        >
          GET A FREE QUOTE
        </Button>
      </div>
    </div>
  );
};

export default Banner;
