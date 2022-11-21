import React from "react";
import {useState} from "react";


const Form = (insertTransaction) => {

    const [data, setData] = useState({
        description: "", 
        type: "entrada", 
        value: 0
    });

    function submit(e){    
        e.preventDefault();
        insertTransaction(data);
        setData({
            description: "", 
            type: "entrada", 
            value: 0
        })
    };

  return (
    <form onSubmit={submit}>

        <label name="description">Descrição</label>
        <input type="text" value = {data.description} placeholder ="Digite aqui sua descrição" onChange={(e) => setData({...data, description: e.target.value})  }/>
        <p>Ex: Compra de roupas</p>

        <label name="value">Valor</label>
        <input type="number" onChange={(e) => setData({...data, value: Number(e.target.value)})}/>

        <label name="type">Tipo de valor</label>
        <select defaultValue = {data.type} onChange={(e) => setData({...data, type: e.target.value})}>
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
        </select>

        <button type ="submit">Inserir valor</button>
    </form>
  )
}

export default Form
 