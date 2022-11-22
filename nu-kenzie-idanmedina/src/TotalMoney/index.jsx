import React from "react";

const TotalMoney = ({ list }) => {

const totalValue = list.reduce((acc, cur) => {
  return cur.type === "entrada" ? Number(acc + cur.value) : Number(acc - cur.value)
}, 0);

  return (
    <div className="counter-container">
      <div>
        <h3>Valor total:</h3>
        <p>O valor se refere ao saldo</p>
      </div>
      <span>$ { totalValue }</span>
    </div>
  );
};

export default TotalMoney;
