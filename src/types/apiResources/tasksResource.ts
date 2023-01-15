export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface TaskGroup {
  id: number;
  date: Date;
  tasks: Task[];
}

export interface TasksResource {
  data: TaskGroup[];
}
