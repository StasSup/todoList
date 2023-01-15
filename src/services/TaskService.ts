import getTaskList from '../api/getTaskList';
import { TaskGroup } from '../types/apiResources/tasksResource';

export const TaskService = {
  getAll(): Promise<TaskGroup[]> {
    return getTaskList()
      .then((response) => response.data);
  }
}
