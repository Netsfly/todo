// components/TodoItem.tsx
"use client";

type TodoItemProps = {
  id: string;  // id теперь строка
  text: string;
  completed: boolean;
  toggleComplete: (id: string) => void;  // toggleComplete теперь принимает строку
  removeTodo: (id: string) => void;      // removeTodo теперь принимает строку
};

export default function TodoItem({
  id,
  text,
  completed,
  toggleComplete,
  removeTodo,
}: TodoItemProps) {
  return (
    <div className="flex justify-between items-center bg-white p-2 rounded-lg shadow mb-2">
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
          className="mr-2"
        />
        <span className={`${completed ? "line-through text-gray-500" : ""}`}>
          {text}
        </span>
      </div>
      <button
        onClick={() => removeTodo(id)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
}
