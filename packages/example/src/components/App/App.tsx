import { useState, useEffect } from "react";
import { NewTaskForm } from "../NewTaskForm/NewTaskForm";
import { Tasks } from "../Tasks/Tasks";
import { TodoFooter } from "../TodoFooter/TodoFooter";
import { todoStore, addTask, toggleTask, setFilter, clearCompleted } from "../../store";
import "./App.css";

function App() {
  const [state, setState] = useState(todoStore.getState());

  useEffect(() => {
    const unsubscribe = todoStore.subscribe(newState => {
      setState(newState);
    });
    
    return () => unsubscribe();
  }, []);

  const currentTasks = (() => {
    switch (state.currentFilter) {
      case 'active':
        return state.tasks.filter(task => !task.isCompleted);
      case 'completed':
        return state.tasks.filter(task => task.isCompleted);
      default:
        return state.tasks;
    }
  })();

  return (
    <div className="todo-app">
      <h1 className="app-title">todos</h1>
      <div className="todo-container">
        <NewTaskForm addNewTask={addTask} />
        <Tasks tasks={currentTasks} toggleTaskStatus={toggleTask} />
        <TodoFooter
          tasks={state.tasks}
          setCurrentFilter={setFilter}
          currentFilter={state.currentFilter}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
}

export default App;