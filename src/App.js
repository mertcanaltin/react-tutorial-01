import logo from "./logo.svg";
import "./App.css";

import Dot from "./components/dot";
import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("Ferdi Gökdemir");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    setTodos(todos);
  };

  return (
    <div className="AppFerdi text-center">
      <Header />
      Merhaba ben {name} <Dot color="red" fontSize="128px" />
      <br />
      Burası Mersin <Dot color="yellow" fontSize="60px" />
      <button onClick={() => setName("Ahmet Gökdemir")}>İsmi Değiştir</button>
      {todos.map((todo) => (
        <div style={{ border: "3px solid red" }}>{todo.title}</div>
      ))}
      <Footer />
    </div>
  );
}

export default App;
