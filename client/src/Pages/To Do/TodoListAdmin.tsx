import React, { useEffect } from "react";
import PageTemp from "../../Context/PageTemp";
import Oops from "../../Context/Oops";

import { axiosWithAuth } from "../../Utility/AxiosWithAuth";
import env from "ts-react-dotenv";

import { ListItem, List, StrikeA, Button } from "./TodoListStyles";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
  visible: boolean;
  lastSign: string;
};

const TodoList: React.FC = () => {
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
    todos.map((todo: any) => {
      if (todo.id === id) {
        const data = { visible: !todo.visible };
        axiosWithAuth()
          .put(`${env.API_URL}api/todo/${id}`, data)
          .then((res) => {
            setTodos(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
      return;
    });
  };

  const resetAll = () => {
    todos.map((todo: any) => {
      const data = { visible: false, completed: false };
      axiosWithAuth()
        .put(`${env.API_URL}api/todo/${todo.id}`, data)
        .then((res) => {
          setTodos(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
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
              {todos.map((todo: any) => (
                <ListItem
                  visible={true}
                  onClick={() => toggleCompleted(todo.id)}
                  key={todo.id}
                >
                  <StrikeA visible={todo.visible} complete={todo.completed}>
                    {todo.task}
                  </StrikeA>
                </ListItem>
              ))}
              <Button onClick={resetAll}>Reset All</Button>
            </List>
          </>
        )
      }
    />
  );
};

export default TodoList;
