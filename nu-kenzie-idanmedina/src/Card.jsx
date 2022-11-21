import React from "react";

const Card = ({ transaction, deleteTransaction }) => {
  return (
    <li>
      <div>
        <div id="flap"></div>
        <div className="card-info">
          <h2>{transaction.description}</h2>
          <p>{transaction.type}</p>
        </div>
      </div>
      <div className="card-value">
          <p>R$ {transaction.value}</p>
        <span onClick={() => deleteTransaction(transaction.description)}>
          <img
            onClick={() => deleteTransaction(transaction.description)}
            src="./trash.png"
          />
        </span>
      </div>
    </li>
  );
};

export default Card;
