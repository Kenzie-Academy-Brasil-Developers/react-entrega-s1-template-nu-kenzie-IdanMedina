import React from "react";
import Card from "./Card";

const List = ({list, deleteTransaction, setFilterType}) => {
  return (
    <div>
      <h3>Resumo financeiro</h3>
      <div>
      <button onClick ={() => setFilterType("todos")}>Todos</button>
      <button onClick ={() => setFilterType("entrada")}>Entradas</button>
      <button onClick ={() => setFilterType("saída")}>Saídas</button>
      </div>
    <ul>
      {list.map ((transaction, index) => (
        <Card key={index} transaction={transaction} deleteTransaction={deleteTransaction}/>
      ))}
      </ul>
      </div>
      /* Agora, dentro do componente List,
     você precisa fazer um map no state listTransactions.
      Para cada interação da lista você criará um componente Card.
       Ou seja,
        se dentro do state listTransactions existir 3 transações cadastradas,
         teremos 3 cards em tela. 
         
         listTransactions.map((transaction, index) => <Card transaction={transaction} key={index} />)
         
         */
  )
};

export default List
