import React from "react";
import noCard from "../assets/NoCard.svg";
import "./styles.css";

const EmptyList = () => {
  return (
    <div>
      <img id="no-card" src={noCard} />
    </div>
  );
};

export default EmptyList;
