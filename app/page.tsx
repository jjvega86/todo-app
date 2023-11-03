import Link from "next/link";
import ToDoList from "./components/TodoList";

// TODO: <FEAT> - Checkbox to mark todo as "complete"
// TODO: <FEAT> - Show overdue todos as red background
// TODO: <FEAT> - Sort todos by due date
// TODO: <FEAT> - Delete todo
// TODO: <FEAT> - Update todo



export default function Home() {
  return (
    <main className="">
       <Link
        href="/todo/create"
        className="block mx-auto text-4xl font-bold mb-5 w-1/2 text-center pt-12 px-4 underline"
      >
        Add a To-Do
      </Link>
      <ToDoList />
    </main>
  );
}
