import styles from './CurrentTasks.module.css';
import { Checkbox } from '@mui/material';
import { FC, useMemo } from 'react';
import { useStore } from '../../../../hooks/useStore';
import TaskGroupStub from '../../components/TaskGroupStub/TaskGroupStub';
import Task from '../../components/Task/Task';

export interface CurrentTodosProps {
  id: number;
}

const CurrentTasks: FC<CurrentTodosProps> = (props) => {
  const {
    id,
  } = props;

  const checkBoxStyles = useMemo(() => {
    return {
      color: '#ffffff',
      borderRadius: '100%',
      '&.Mui-checked': {
        color: '#ffffff',
      },
    };
  }, []);

  const { getTaskGroupInfo, switchTaskStatus } = useStore();
  const taskGroup = getTaskGroupInfo(id);

  if (!taskGroup) return null;
  if (taskGroup.tasks.length === 0) return <TaskGroupStub />;

  const taskList = useMemo(() => {
    return taskGroup.tasks.map((task) => (
      <Task
        key={task.id}
        isActive
        title={task.title}
        description={task.description}
        completed={task.completed}
        onSwitch={() => switchTaskStatus(id, task.id)}
      />
    ));
  }, [taskGroup.tasks, switchTaskStatus]);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Checkbox
          sx={checkBoxStyles}
          checked
          disabled
        />
        <div className={styles.title}>
          Today Tasks:
        </div>
      </div>
      <div className={styles.taskList}>
        {taskList}
      </div>
    </div>
  );
};

export default CurrentTasks;
