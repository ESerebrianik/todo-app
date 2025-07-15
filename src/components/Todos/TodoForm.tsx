import { useState, FormEvent } from "react";
import styles from "./TodoForm.module.css";
import { RiArrowDownSLine } from "react-icons/ri";
import React from "react";

interface TodoFormProps {
  addTodo: (text: string) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (text.trim() === "") return;
    addTodo(text.trim());
    setText("");
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <RiArrowDownSLine className={styles.todoFormIcon} />
        <input
          placeholder="What needs to be done"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
}