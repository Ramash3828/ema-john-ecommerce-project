import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import Register from "./Components/Reigister/Register";
import Shop from "./Components/Shop/Shop";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Shop></Shop>}></Route>
                <Route
                    path="/shop"
                    element={
                        <RequireAuth>
                            <Shop></Shop>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/orders" element={<Orders></Orders>}></Route>
                <Route
                    path="/inventory"
                    element={<Inventory></Inventory>}
                ></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
            </Routes>
        </div>
    );
}

export default App;
