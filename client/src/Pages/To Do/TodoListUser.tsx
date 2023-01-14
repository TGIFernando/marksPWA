import React, { useEffect } from "react";
import PageTemp from "../../Context/PageTemp";
import Oops from "../../Context/Oops";

import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import env from "ts-react-dotenv";

import { ListItem, List, Strike } from "./TodoListStyles";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
  visible: boolean;
  lastSign: string;
};

function TodoListUser() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [error, setError] = React.useState<boolean>(false);

  useEffect(() => {
    axiosWithAuth()
      .get(`${env.API_URL}api/todo`)
      .then((res) => {
        setTodos(res.data);
        setError(false);
      })
      .catch((err) => {
        setTodos([]);
        setError(true);
        console.log(err.message);
      });
  }, []);

  const toggleCompleted = (id: number) => {
    todos.map((todo) => {
      if (todo.id === id) {
        const data = { completed: !todo.completed };
        axiosWithAuth()
          .put(`${env.API_URL}api/todo/${id}`, data)
          .then((res) => {
            setTodos(res.data);
          })
          .catch((err) => {
            console.error(err.message);
          });
      }
      return;
    });
  };

  return (
    <PageTemp
      page={
        error ? (
          <Oops />
        ) : (
          <>
            <List>
              {todos.map((todo) => (
                <ListItem visible={todo.visible} key={todo.id}>
                  <Strike
                    onClick={() => toggleCompleted(todo.id)}
                    complete={todo.completed}
                  >
                    {todo.task}
                  </Strike>
                </ListItem>
              ))}
            </List>
          </>
        )
      }
    />
  );
}

export default TodoListUser;
