import React from "react";
import { useState } from "react";
import styles from "./styles.module.css"

const Form = ({ insertTransaction }) => {
  const [data, setData] = useState({
    description: "",
    type: "entrada",
    value: "",
    id: Math.random()
  });

  function submit(e) {
    e.preventDefault();
    insertTransaction(data);
    console.log(data);
    setData({
      description: "",
      type: "entrada",
      value: "",
      id: Math.random()
    });
  }

  return (
    <form className={styles.formulary} onSubmit={submit}>
      <label name="description" className ={styles.labelDescription}>
        Descrição
      </label>
      <input
        type="text"
        value={data.description}
        placeholder="Digite aqui sua descrição"
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <p>Ex: Compra de roupas</p>

      <div className={styles.valueTypeInputs}>
        <div className={styles.inputDiv}>
          <label name="value">Valor</label>
          <input
            type="number"
            className = {styles.numberInput}
            placeholder="0"
            value={data.value}
            onChange={(e) =>
              setData({ ...data, value: Number(e.target.value) })
            }
          />
        </div>
        <div className={styles.inputDiv}>
          <label name="type">Tipo de valor</label>
          <select
            value={data.type}
            onChange={(e) => setData({ ...data, type: e.target.value })}
          >
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>

      <button type="submit">Inserir valor</button>
    </form>
  );
};

export default Form;
