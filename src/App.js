import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import Shop from "./Components/Shop/Shop";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Shop></Shop>}></Route>
                <Route path="/shop" element={<Shop></Shop>}></Route>
                <Route path="/orders" element={<Orders></Orders>}></Route>
                <Route
                    path="/inventory"
                    element={<Inventory></Inventory>}
                ></Route>
                <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
        </div>
    );
}

export default App;
