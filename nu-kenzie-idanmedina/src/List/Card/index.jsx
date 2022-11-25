import React from "react";
import { FaTrash } from "react-icons/fa";
import "./styles.css";

const Card = ({ transaction, deleteTransaction }) => {
  return (
    <li className="card">
      <div>
        <div id="flap"></div>
        <div className="card-info">
          <h2>{transaction.description}</h2>
          <p>{transaction.type}</p>
        </div>
      </div>
      <div className="card-value">
        <p>R$ {transaction.value}</p>
        <span onClick={() => deleteTransaction(transaction.id)}>
          <FaTrash
            className="trash"
            onClick={() => deleteTransaction(transaction.id)}
          />
        </span>
      </div>
    </li>
  );
};

export default Card;
