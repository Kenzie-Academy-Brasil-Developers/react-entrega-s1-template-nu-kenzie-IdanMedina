import React from "react";
import Header from "../../Header";
import Form from "../../Form";
import List from "../../List";
import TotalMoney from "../../TotalMoney";

const Home = ({
  list,
  insertTransaction,
  deleteTransaction,
  setFilterType,
  setStart,
  sumTransactions,
}) => {
  return list.length === 0 ? (
    <div>
      <Header setStart={setStart} />
      <Form insertTransaction={insertTransaction} />
      <List
        list={list}
        deleteTransaction={deleteTransaction}
        setFilterType={setFilterType}
      />
    </div>
  ) : (
    <div>
      <Header setStart={setStart} />
      <Form insertTransaction={insertTransaction} />
      <TotalMoney list={list} sumTransactions={sumTransactions} />
      <List
        list={list}
        deleteTransaction={deleteTransaction}
        setFilterType={setFilterType}
      />
    </div>
  );
};

export default Home;
