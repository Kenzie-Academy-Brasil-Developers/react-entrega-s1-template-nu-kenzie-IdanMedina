import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [start, setStart] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [filterType, setFilterType] = useState("todos");

  const filteredList = listTransactions.filter((transaction) =>
    filterType === "todos" ? true : transaction.type === filterType
  );

  function insertTransaction(data) {
    setListTransactions([...listTransactions, data]);
  }

  function deleteTransaction(idTransaction) {
    const filterList = listTransactions.filter(
      (transaction) => transaction.id !== idTransaction
    );
    setListTransactions(filterList);
  }

  return (
    <div className="App">
      {start ? (
        <Home
          list={filteredList}
          insertTransaction={insertTransaction}
          deleteTransaction={deleteTransaction}
          setFilterType={setFilterType}
          setStart={setStart}
        />
      ) : (
        <Login setStart={setStart} />
      )}
    </div>
  );
}

export default App;
