import Menu from "./components/header/Menu";
import { Outlet } from "react-router-dom";
import BalasesProvider from "./provider/BalanceProvider";

function App() {
  return (
    <BalasesProvider>
      <Menu />
      <Outlet />
    </BalasesProvider>
  );
}

export default App;
