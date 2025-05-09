import { Store } from "state-manager"

export type TTask = {
  name: string;
  id: string;
  isCompleted: boolean;
};

export const todoStore = new Store<{
  tasks: TTask[];
  currentFilter: 'all' | 'active' | 'completed';
}>({
  tasks: [],
  currentFilter: 'all'
});

export const addTask = (task: TTask) => {
  todoStore.updateState(prev => ({
    ...prev,
    tasks: [...prev.tasks, task]
  }));
};

export const toggleTask = (id: string) => {
  todoStore.updateState(prev => ({
    ...prev,
    tasks: prev.tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    )
  }));
};

export const clearCompleted = () => {
  todoStore.updateState(prev => ({
    ...prev,
    tasks: prev.tasks.filter(task => !task.isCompleted)
  }));
};

export const setFilter = (filter: 'all' | 'active' | 'completed') => {
  todoStore.updateState(prev => ({
    ...prev,
    currentFilter: filter
  }));
};