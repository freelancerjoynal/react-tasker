import { useState } from "react";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import TaskManager from "./tasks/TaskManager";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <TaskManager />
      <Footer />
    </>
  );
}

export default App;
