import React from "react";

const Card = ({transaction, deleteTransaction}) => {
  
  return (
    
    <li>
      <div></div>
      <h2>
        {transaction.description}
      </h2>
      <p>
        {transaction.type}
      </p>
      <p>
        {transaction.value}
      </p>
      <span onClick = {() =>  deleteTransaction(transaction.description) } >
      <img onClick = {() =>  deleteTransaction(transaction.description) } src="./trash.png" alt = "trash" />
      </span>
    </li>
  )
};

export default Card