import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;

  return (
    <div>
      <div className={`card shadow-xl md:card-side text-white p-6 ${bgClass}`}>
        <figure>
          <img
            src={icon}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
