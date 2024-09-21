"use client";
import Todo from "@/components/Todo";
import { useState } from "react";
export default function page() {
  const [todos, setTodos] = useState([]);

  const [inputData, setInputData] = useState("");

  const addTodo = () => {
    setTodos([...todos, inputData]);
    setInputData("");
    console.log(todos);
  };
  const removeTodo = (item) => {
    setTodos(
      // abc !== abcd ///false
      todos.filter((todo) => todo !== item)
    );
  };
  return (
    <div>
      <input
        className="border border-black"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        type="text"
        placeholder="Enter your task"
      />
      <button onClick={addTodo}>Submit</button>

      {todos.map((todo, index) => {
        return <Todo key={index} data={todo} removeTodo={removeTodo} />;
      })}
    </div>
  );
}
