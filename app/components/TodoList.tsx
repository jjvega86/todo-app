import React from "react";
import { toDo } from "../lib/types";
import MarkComplete from "./MarkComplete";

export default async function ToDoList() {
  const todos = await fetch("http://localhost:3000/api", {
    next: { tags: ["ToDo"] }
  });
  const { data } = await todos.json();

  return (
    <div className="max-w-xl mx-auto pt-10">
      <h1 className="text-4xl font-bold mb-5">To-Do List</h1>
      <ul>
        {data.map((todo: toDo) => (
          <li
            key={todo.id}
            className="bg-gray-800 p-4 rounded-lg mb-2 flex justify-between"
          >
            <div>{todo.task}</div>
            <div className="flex flex-row justify-between gap-9">
              <div className="bg-green-500 px-2 py-1 rounded text-sm">
                {todo.dueDate}
              </div>
              <MarkComplete id={todo.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
