import { useCallback, useEffect, useState } from 'react';
import { TaskGroup } from '../types/apiResources/tasksResource';
import { useQuery } from 'react-query';
import { TaskService } from '../services/TaskService';
import { NewsService } from '../services/NewsService';
import { NewsItem } from '../types/apiResources/newsResource';

export interface StoreType {
  taskList: TaskGroup[];
  getTaskGroupInfo: (taskId: number) => TaskGroup | undefined;
  switchTaskStatus: (taskGroupId: number, taskId: number) => void;
  newsMarqueeIsEnabled: boolean;
  setNewsMarqueeIsEnabled: (value: boolean) => void;
  news?: NewsItem[];
}

function store(): StoreType {
  const [taskList, setTaskList] = useState<TaskGroup[]>([]);
  const [newsMarqueeIsEnabled, setNewsMarqueeIsEnabled] = useState<boolean>(true);

  useEffect(() => {
    if (newsMarqueeIsEnabled) {
      refetch();
    }
  }, [newsMarqueeIsEnabled]);

  useQuery<TaskGroup[]>('todoList', {
    queryFn: () => TaskService.getTaskList(),
    onSuccess: (data) => setTaskList(data),
  });

  const { data: news, refetch } = useQuery('news', () => NewsService.getNews(), {
    select: ((data) => data.articles),
    enabled: false,
  });

  const getTaskGroupInfo = useCallback((taskId: number) => {
    return taskList.find((task) => task.id === taskId);
  }, [taskList]);

  const switchTaskStatus = useCallback((taskGroupId: number, taskId: number) => {
    const test = [...taskList];
    test.find((group) => group.id === taskGroupId)!.tasks.map((task) => {
      if (task.id === taskId) task.completed = !task.completed;
    });

    setTaskList([...test]);
  }, [taskList]);

  return {
    taskList,
    getTaskGroupInfo,
    switchTaskStatus,
    newsMarqueeIsEnabled,
    setNewsMarqueeIsEnabled,
    news,
  };
};

export default store;
