import api from '../api/client';
import { TasksResource } from '../types/apiResources/tasksResource';

export default function getTaskList(): Promise<TasksResource> {
  return api.get('taskList');
}
