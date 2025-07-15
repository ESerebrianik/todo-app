import Todo from "./Todo.tsx";
import styles from "./TodoList.module.css";
import { TodoType } from "../../types";
import React from "react";

interface TodoListProps {
  todos: TodoType[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export default function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
}: TodoListProps) {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

