import React, { useContext} from "react";
import BudgetForm from "./BudgetForm";
import { BalanceContext } from "../../context/BalanceContext";
import TransactionList from "./TransactionList";
import classNames from "classnames";

const Transaction = () => {
  const { operationType, budget } = useContext(BalanceContext);
  return (
    <div className="budget-form">
      <BudgetForm></BudgetForm>
      <h3>{operationType? "Доходи" : "Витрати "}</h3>
      <ul className={classNames({ costs: !operationType })}>
         <TransactionList budget={budget.get(operationType) || []} state={operationType}></TransactionList>
      </ul>
      
    </div>
  );
};

export default React.memo(Transaction);
