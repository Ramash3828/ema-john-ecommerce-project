import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Orders from "./Components/Orders/Orders";
import Register from "./Components/Reigister/Register";
import Shipment from "./Components/Shipment/Shipment";
import Shop from "./Components/Shop/Shop";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Shop></Shop>}></Route>
                <Route path="/shop" element={<Shop></Shop>}></Route>
                <Route path="/orders" element={<Orders></Orders>}></Route>
                <Route
                    path="/shipment"
                    element={
                        <RequireAuth>
                            <Shipment></Shipment>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/inventory"
                    element={<Inventory></Inventory>}
                ></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
}

export default App;
