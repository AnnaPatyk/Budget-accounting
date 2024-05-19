import React, { useContext } from "react";
import { BalanceContext } from "../../context/BalanceContext";
import TransactionList from "./TransactionList";
import DeleteAll from "./DeleteAll";

const BudgetDisplay = () => {
  const {budget, haednlerDelitAll} = useContext(BalanceContext);
  
  return (
    <div className="balance">
      <h1>Баланс : <span> {budget.get('budgetTotal')}</span></h1>
      <ul>
        <h3 className="profits">Доходи</h3>
        <TransactionList budget={budget.get(true)||[]} state={true} />
        </ul>
        <ul className="costs">
         <h3>Витрати</h3>
        <TransactionList budget={budget.get(false)||[]} state={false} />
      </ul>
      {(budget.get(true).length !== 0 || budget.get(false).length !== 0)  && (<DeleteAll hadlerDelit={haednlerDelitAll}></DeleteAll>)}
    </div>
  );
};

export default React.memo(BudgetDisplay);
