import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { BalanceContext } from "../../context/BalanceContext";
import "../header/menu.css"
const Menu = () => {
  const {operationType, handleSetBudgetState,   budget } =
    useContext(BalanceContext);
    let Location = useLocation();
  return (
    <header>
      <nav>
        <Link
          onClick={() => {
            handleSetBudgetState(true);
          }}
          to="/transaction"
           className={operationType && Location.pathname==="/transaction" ? 'active' : ''}
        >
          {" "}
          Дохід
        </Link>
        <Link
          onClick={() => {
            handleSetBudgetState(false);
          }}
          to="/transaction"
           className={!operationType && Location.pathname==="/transaction"? 'active' : ''}
        >
          {" "}
          Розхід
        </Link>
        <Link to="/budgetDisplay" className={Location.pathname==="/budgetDisplay"? 'active' : ''}>
          {" "}
          Баланс<span> {budget.get( "budgetTotal")}</span>
        </Link>
      </nav>
    </header>
  );
};

export default React.memo(Menu);
