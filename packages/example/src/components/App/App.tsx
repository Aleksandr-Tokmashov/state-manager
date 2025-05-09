// App.tsx
import { useEffect, useState } from "react";
import { NewTaskForm } from "../NewTaskForm/NewTaskForm";
import { Tasks } from "../Tasks/Tasks";
import { TodoFooter } from "../TodoFooter/TodoFooter";
import "./App.css";
import { todoStore, TTask } from "../../store";

function App() {
  const [state, setState] = useState(todoStore.getState());

  useEffect(() => {
    const unsubscribe = todoStore.subscribe(setState);
    return () => unsubscribe();
  }, []);

  const currentTasks = (() => {
    switch (state.currentFilter) {
      case 'all': return state.tasks;
      case 'active': return state.tasks.filter(task => !task.isCompleted);
      case 'completed': return state.tasks.filter(task => task.isCompleted);
    }
  })();

  function addNewTask(task: TTask) {
    todoStore.updateState(prev => ({
      ...prev,
      tasks: [...prev.tasks, task]
    }));
  }

  function toggleTaskStatus(id: string) {
    todoStore.updateState(prev => ({
      ...prev,
      tasks: prev.tasks.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    }));
  }

  function clearCompletedTasks() {
    todoStore.updateState(prev => ({
      ...prev,
      tasks: prev.tasks.filter(task => !task.isCompleted)
    }));
  }

  function setCurrentFilter(filter: 'all' | 'active' | 'completed') {
    todoStore.updateState(prev => ({
      ...prev,
      currentFilter: filter
    }));
  }

  return (
    <div className="todo-app">
      <h1 className="app-title">todos</h1>
      <div className="todo-container">
        <NewTaskForm addNewTask={addNewTask} />
        <Tasks tasks={currentTasks} toggleTaskStatus={toggleTaskStatus} />
        <TodoFooter
          tasks={state.tasks}
          setCurrentFilter={setCurrentFilter}
          currentFilter={state.currentFilter}
          clearCompleted={clearCompletedTasks}
        />
      </div>
    </div>
  );
}

export default App;