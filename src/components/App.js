import { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const visibleTasks = tasks.filter((task) =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  );

 function handleDeleteTask(textToRemove) {
  const updatedTasks = tasks.filter((task) => task.text !== textToRemove);
  setTasks(updatedTasks);
}
  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }


  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
