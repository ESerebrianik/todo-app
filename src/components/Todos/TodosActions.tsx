import Button from "../UI/Button.tsx";
import styles from "./TodosActions.module.css";
import React from "react";

interface TodosActionsProps {
  resetTodos: () => void;
  deleteCompletedTodos: () => void;
  completedTodosExist: boolean;
  leftedTodosCount: number;
  activeFilter: "all" | "active" | "completed";
  changeFilter: (filter: "all" | "active" | "completed") => void;
}

export default function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
  leftedTodosCount,
  changeFilter,
  activeFilter,
}: TodosActionsProps) {
  return (
    <div className={styles.todosActionsContainer}>
      <div className={styles.leftCount}>
      {leftedTodosCount === 0 ? (
          <p>All done 🎉</p>
        ) : (
          <p>
            {leftedTodosCount}{" "}
            {leftedTodosCount !== 1 ? "items left" : "item left"}
          </p>
        )}
      </div>

      <div className={styles.radioButtons}>
        <input
          type="radio"
          id="all"
          name="filter"
          onChange={() => changeFilter("all")}
          checked={activeFilter === "all"}
        />
        <label htmlFor="all">All</label>

        <input
          type="radio"
          id="act"
          name="filter"
          onChange={() => changeFilter("active")}
          checked={activeFilter === "active"}
        />
        <label htmlFor="act">Active</label>

        <input
          type="radio"
          id="com"
          name="filter"
          onChange={() => changeFilter("completed")}
          checked={activeFilter === "completed"}
        />
        <label htmlFor="com">Completed</label>
      </div>

      <div className={styles.rightButton}>
        <Button onClick={deleteCompletedTodos} disabled={!completedTodosExist}>
          Clear completed
        </Button>
      </div>
    </div>
  );
}