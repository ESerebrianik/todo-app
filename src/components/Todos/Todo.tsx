import styles from "./Todo.module.css";
import { TodoType } from "../../types";
import React from "react";

interface TodoProps {
  todo: TodoType;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export default function Todo({ todo, deleteTodo, toggleTodo }: TodoProps) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <label
        className={styles.todoItem}
        
      >
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(todo.id)}
         
        />
        <span className={styles.customCheckbox} />
      </label>
      <div
        className={`${styles.todoText} ${
          todo.isCompleted ? styles.completedTodo : ""
        }`}
      >
        {todo.text}
      </div>
      
    </div>
  );
}