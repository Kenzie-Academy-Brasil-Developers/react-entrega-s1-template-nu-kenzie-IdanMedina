import React from "react";
import { useState } from "react";

const Form = ({insertTransaction}) => {
  const [data, setData] = useState({
    description: "",
    type: "entrada",
    value: 0,
  });

  function submit(e) {
    e.preventDefault();
    console.log(data)
    insertTransaction(data);
    setData({
      description: "",
      type: "entrada",
      value: 0,
    });
  }

  return (
    <form onSubmit={submit}>
      <label name="description" id="label-description">
        Descrição
      </label>
      <input
        type="text"
        value={data.description}
        placeholder="Digite aqui sua descrição"
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <p>Ex: Compra de roupas</p>

      <div className="value-type-inputs">
        <div className="input-div">
          <label name="value">Valor</label>
          <input
            type="number"
            id="number-input"
            defaultValue={1}
            onChange={(e) =>
              setData({ ...data, value: Number(e.target.value) })
            }
          />
        </div>
        <div className="input-div">
          <label name="type">Tipo de valor</label>
          <select
            defaultValue={data.type}
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
