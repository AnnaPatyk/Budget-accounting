import React, { useEffect, useReducer, useState } from "react";
import { BalanceContext } from "../context/BalanceContext";
import operationTypeReducer from "./opretionTypeReducer";
import budgetReduser from "./budgetReduser";
import "./style.css";
import "../components/BudgetForm/budget.css"

const initial = new Map([
    [
        true,
        []
    ],
    [
        "budgetTotal",
        0
    ],
    [
        false,
        []
    ]
])
const BalasesProvider = ({ children }) => {
  const [operationType, dispatch] = useReducer(operationTypeReducer,true);
  const [budget, dispatchBudget] = useReducer(
   budgetReduser,
    new Map(JSON.parse(localStorage.getItem("budget")) || initial)
  );
  const addBudget = (item,operationType) => {
    dispatchBudget({
      type:'addBudgetItem',
      payload : {item,operationType}
    }) 
  };

  useEffect(()=>{
localStorage.setItem("budget", JSON.stringify(Array.from(budget)));

  },[budget])

  const handleSetBudgetState = (state) => {
   dispatch({
      type:'toggle',
      payload:state
   })
   
  };

 const haendlerItemDelete = (id, state)=>{
   dispatchBudget({
      type:'itemDelete',
      payload:{id, state }
   })

  }   

    const haednlerDelitAll = ()=>{
      dispatchBudget({
        type: 'delitAll',
        payload:{initial}
      }) 
   }
  return (
    <BalanceContext.Provider
      value={{
        operationType,
        handleSetBudgetState,
        addBudget,
        budget,
        haendlerItemDelete,
        haednlerDelitAll
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export default React.memo(BalasesProvider);
