// components/TodoList.tsx
"use client";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';  // Импортируем uuid для генерации уникальных ID
import TodoItem from "./TodoItem";

type Todo = {
  id: string;  // id теперь строка
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: uuidv4(), text: input, completed: false }]);  // Используем uuid для id
      setInput("");
    }
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="border border-gray-300 p-2 rounded-lg flex-grow"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white p-2 ml-2 rounded-lg"
        >
          Add
        </button>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}
