import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>WHAT WE SPECIALIZE IN.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              label="Data / LAN Cabling / Optic Fibre Installation / Wi-Fi cabling"
              text="Connecting your Users, Phones, Switches and WAN within your office your LAN is a critical yet often overlooked tool in your business.
               Contact us for new installations or additions to your current setup."
              path="/services"
            />
            <CardItem
              text="Connecting camera's back to a central monitoring location can be a laborious task.
               We specialise in the professional cabling of CCTV installation."
              label="CCTV Cabling"
              path="/services"
            />
            <CardItem
              text="Over time computer or infrastructure rooms can be come over run with layers of cables and equipment. 
              This can lead to extended down time as engineers struggle to find the correct cables or even fire hazards. 
              As a service we can come in and Clean up the setup leaving you with a neat professional space simplifying support and reducing risk in your business."
              label="Computer Room Cleanup"
              path="/services"
            />
            <CardItem
              text="Installing a space in your office to house your ICT infrastructure? We can assist with both the initial design and installation of key aspects of your company computer room."
              label="Computer Room Design"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
