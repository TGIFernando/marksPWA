import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Schedule from "./Pages/Schedule/Schedule";
import Post from "./Pages/Post/Post";
import TodoList from "./Pages/To Do/TodoListAdmin";
import TodoListUser from "./Pages/To Do/TodoListUser";
import Tasks from "./Pages/Tasks/Tasks";

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
            <Route element={<Schedule />} path="schedule/:id" />
            <Route element={<Post />} path="/post" />
            <Route element={<TodoList />} path="todoadmin" />
            <Route element={<TodoListUser />} path="todo" />
            <Route element={<Tasks />} path="tasks" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
