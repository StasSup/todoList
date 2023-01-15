import { createContext } from 'react';
import { TaskGroup } from '../types/apiResources/tasksResource';
import { NewsItem } from '../types/apiResources/newsResource';

export type RootContextType = {
  taskList: TaskGroup[];
  getTaskGroupInfo: (taskId: number) => TaskGroup | undefined;
  switchTaskStatus: (taskGroupId: number, taskId: number) => void;
  newsMarqueeIsEnabled: boolean;
  setNewsMarqueeIsEnabled: (value: boolean) => void;
  news?: NewsItem[];
};

export const RootContext = createContext<RootContextType | undefined>(undefined);
