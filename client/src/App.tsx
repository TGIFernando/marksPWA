import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./Utility/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login" />

          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
