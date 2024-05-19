import React, { useContext, useState } from "react";
import { BalanceContext } from "../../context/BalanceContext";

 const id = () => {
    const now = new Date();
    const id = now.getTime().toString();
    return id;
  };

const BudgetForm = () => {
  const [operation, setOperation] = useState("");
  const [operationAmount, setOperationAmount] = useState("");
  const { operationType,  addBudget } = useContext(BalanceContext);
 
  const handleInputChange = (event) => {
     setOperation(event.target.value ? event.target.value : "");
  };
  const handleInputChangeAmount = (e)=>{
     setOperationAmount(e.target.value ? Number(e.target.value) : "");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAmount = operationType ? Math.abs(operationAmount) : -Math.abs(operationAmount);
    let obj = {
      title: operation,
      sum: newAmount,
      id: id(),
    };
    addBudget(obj, operationType)
    setOperation("");
    setOperationAmount(0)
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
       <p> Назва операції:</p>
        <input
          type="text"
          value={operation}
          onChange={handleInputChange}
          required
        />
      </label>
      <label htmlFor="operationAmount">
        <p> Сума операції:</p>
        <input
          type="number"
          id="operationAmount"
          value={operationAmount}
          onChange={handleInputChangeAmount}
          required
        />
      </label>
      <button type="submit">Додати</button>
    </form>
  );
};

export default React.memo(BudgetForm);
