import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { v4 as uuid } from "uuid";
import { useState } from "react"

function Dailychecklist() {

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    const addHandler = ()=>{
        setTodos((prevState) => [
            ...prevState,
            {
                id: uuid(),
                text : text
            }
        ])
    }

    const deleteTodo = (id)=> {
        const filteredTodos = todos
    }
   

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Daily Check List</h1>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto flex flex-col gap-4 p-4">
          <div className="flex gap-4">
            <div className="relative flex items-center">
              <SquareCheckIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input type="text" placeholder="Add a new todo..." className="pl-8 box-border" />
            </div>
            <Button className="h-[39px]">Add todo</Button>
          </div>
          <div className="border rounded-lg">
            <div className="flex items-center gap-4 p-4 border-t last:border-b">
              <Checkbox id="todo1" className="mr-2" />
              <label htmlFor="todo1" className="flex-1 text-sm font-medium">
                Create wireframe for new project
              </label>
              <Button variant="ghost" size="icon" className="rounded-full w-6 h-6">
                <TrashIcon className="w-4 h-4" />
                <span className="sr-only">Delete todo</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-t last:border-b">
              <Checkbox id="todo2" className="mr-2" />
              <label htmlFor="todo2" className="flex-1 text-sm font-medium">
                Review mockups with team
              </label>
              <Button variant="ghost" size="icon" className="rounded-full w-6 h-6">
                <TrashIcon className="w-4 h-4" />
                <span className="sr-only">Delete todo</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-t last:border-b">
              <Checkbox id="todo3" className="mr-2" />
              <label htmlFor="todo3" className="flex-1 text-sm font-medium">
                Update task board
              </label>
              <Button variant="ghost" size="icon" className="rounded-full w-6 h-6">
                <TrashIcon className="w-4 h-4" />
                <span className="sr-only">Delete todo</span>
              </Button>
            </div>
            <div className="flex items-center gap-4 p-4 border-t last:border-b">
              <Checkbox id="todo4" className="mr-2" />
              <label htmlFor="todo4" className="flex-1 text-sm font-medium">
                Call client for feedback
              </label>
              <Button variant="ghost" size="icon" className="rounded-full w-6 h-6">
                <TrashIcon className="w-4 h-4" />
                <span className="sr-only">Delete todo</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t">
        <div className="container mx-auto flex items-center justify-between h-14 p-4">
          <div className="text-sm">4 items left</div>
          <Button variant="ghost" size="sm">
            Clear completed
          </Button>
        </div>
      </footer>
    </div>
  )
}

function SquareCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export default Dailychecklist;