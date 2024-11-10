// components/TodoItem.tsx
"use client";

type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
};

export default function TodoItem({
  id,
  text,
  completed,
  toggleComplete,
  removeTodo,
}: TodoItemProps) {
  return (
    <div
      className={`flex justify-between items-center p-2 rounded-lg shadow mb-2 
        ${completed ? "bg-gray-200 border border-gray-400" : "bg-orange-700 border-2 border-orange-800"}`} 
    >
      <div className="flex-grow flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
          className="mr-2"
        />
        <span className={`${completed ? "line-through text-gray-500" : "text-white"}`}>
          {text}
        </span>
      </div>

     
      <div className="ml-4 border-l-2 border-gray-400 pl-4">
        <button
          onClick={() => removeTodo(id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
