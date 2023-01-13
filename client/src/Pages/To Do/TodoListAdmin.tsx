import React from "react";
import PageTemp from "../../Context/PageTemp";
import { ListItem, List, Strike } from "./TodoListStyles";
import { data } from "./Data";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
  visible: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>(data);

  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            visible: !todo.visible,
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
              <ListItem
                visible={true}
                onClick={() => toggleCompleted(todo.id)}
                key={todo.id}
              >
                <Strike complete={!todo.visible}>{todo.task}</Strike>
              </ListItem>
            ))}
            <button onClick={onClick}>Submit</button>
          </List>
        </>
      }
    />
  );
};

export default TodoList;
