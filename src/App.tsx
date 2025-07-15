import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm.tsx";
import TodoList from "./components/Todos/TodoList.tsx";
import TodosActions from "./components/Todos/TodosActions.tsx";
import { TodoType } from "./types";
import React from "react";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.isCompleted;
    if (filter === "completed") return todo.isCompleted;
    return true;
  });

  const addTodoHandler = (text: string) => {
    const newTodo: TodoType = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
  const leftedTodosCount = todos.length - completedTodosCount;

  const changeFilterHandler = (newFilter: "all" | "active" | "completed") => {
    setFilter(newFilter);
  };

  return (
    <div className="App">
      <h1>todos</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          leftedTodosCount={leftedTodosCount}
          activeFilter={filter}
          changeFilter={changeFilterHandler}
        />
      )}
    </div>
  );
}