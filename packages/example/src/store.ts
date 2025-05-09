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
  currentFilter: 'all',
});