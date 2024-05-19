import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Transaction from "../components/BudgetForm/Transaction";
import BudgetDisplay from "../components/BudgetForm/BudgetDisplay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "budgetDisplay",
        element: <BudgetDisplay />,
      },
    ],
  },
]);
export { router };
