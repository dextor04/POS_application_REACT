import Billing from "./Billing/Billing";
import Inventory from "./Inventory/Inventory";
import ItemRequest from "./Item_Request/Item_Request";
import Main from "./Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SalesReport from "./Sales_Report/Sales_Report";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/itemRequest" element={<ItemRequest />} />
            <Route path="/salesReport" element={<SalesReport />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
