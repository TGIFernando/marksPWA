import React from "react";
import PageTemp from "../../Context/PageTemp";
import { ListItem, List } from "./TodoListStyles";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([
    { id: 1, task: "Take out the trash", completed: false },
    { id: 2, task: "Do the dishes", completed: true },
    { id: 3, task: "Mow the lawn", completed: false },
  ]);

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

  return (
    <PageTemp
      page={
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
              />
              {todo.task}
              {/* {todo.completed ? " (completed)" : ""} */}
            </ListItem>
          ))}
        </List>
      }
    />
  );
};

export default TodoList;
