import React from "react";
import Card from "./Card";
import EmptyList from "../EmptyList";

const List = ({ list, deleteTransaction, setFilterType }) => {
  return (
    <div className="ul-container">
      <div id="resumen">
        <h3>Resumo financeiro</h3>
        <div id="box-btn">
          <button onClick={() => setFilterType("todos")}>Todos</button>
          <button onClick={() => setFilterType("entrada")}>Entradas</button>
          <button onClick={() => setFilterType("saída")}>Saídas</button>
        </div>
      </div>
      <ul>
        {list.length === 0 ? (
          <EmptyList />
        ) : (
          list.map((transaction, index) => (
            <Card
              key={index}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default List;
