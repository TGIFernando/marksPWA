import React from "react";
import PageTemp from "../../Context/PageTemp";
import { data } from "./Data";

import { ListItem, List, Strike } from "./TodoListStyles";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
  visible: boolean;
};

function TodoListUser() {
  const [todos, setTodos] = React.useState<Todo[]>(data);

  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const onClick = (e: any) => {
    e.preventDefault();
    console.log(todos);
  };

  return (
    <PageTemp
      page={
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
            <button onClick={onClick}>Submit</button>
          </List>
        </>
      }
    />
  );
}

export default TodoListUser;
