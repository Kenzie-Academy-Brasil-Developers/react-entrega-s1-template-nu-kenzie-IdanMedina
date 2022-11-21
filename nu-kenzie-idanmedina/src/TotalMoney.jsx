import React from 'react'

const TotalMoney = ({list, sumTransactions}) => {
  return (
    <div>
    <div>
      <h3>Valor total:</h3>
      <p>O valor se refere ao saldo</p>
    </div>
    <span>{sumTransactions(list)}</span>
  </div>
  )
}

export default TotalMoney
