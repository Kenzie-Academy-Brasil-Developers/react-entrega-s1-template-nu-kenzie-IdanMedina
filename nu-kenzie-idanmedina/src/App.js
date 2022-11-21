import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {list} from "./data/database"
import {useState} from "react";

/* 
Filtro - faça um filtro para mostrar somente entradas ou saídas,
 observe os botões no Figma.

 Excluir Card - Você precisa criar um botão de exclusão do card e deixa-ló funcional,
  ou seja, você deve excluir o item da lista ao clicar no botão.

  Página inicial - Você precisa criar a página inicial do figma e entrar na aplicação,
   além de poder voltar para a página inicial através do botão do header.

   Carregamento da página - Quando nada estiver cadastrado, 
   você pode exporta/usar o svg do Figma com condicional para mostrar ao usuário o efeito de carregamento.
 */

function App() {
 
  const [start, setStart] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [filterType, setFilterType] = useState("todos");

  const filteredList = listTransactions.filter((transaction) => filterType === "todos"? true : transaction.type === filterType)

  function insertTransaction(data){
    setListTransactions([...listTransactions, data])
  };

  function deleteTransaction(delTransDescription){
    const filterList = listTransactions.filter((transaction) => transaction.description !== delTransDescription);
    console.log(filterList)
    setListTransactions(filterList)
  };

  function sumTransactions(list){
    const filterValue = list.map((trans) => trans.value );
    const sum = filterValue.reduce((acc, cur)=> acc + cur, 0);
    return sum
  };

  return (
    <div className="App">
      {start ? ( <Home list = {filteredList} insertTransaction = {insertTransaction} deleteTransaction = {deleteTransaction} setFilterType ={setFilterType} setStart={setStart} sumTransactions = {sumTransactions}/>
      ) : (
      <Login setStart={setStart}/>) }
    </div>
  );
}

export default App;
