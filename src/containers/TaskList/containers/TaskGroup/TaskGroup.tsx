import { FC, useCallback, useMemo, useState } from 'react';
import styles from './TaskGroup.module.scss';
import Task from '../../components/Task/Task';
import cn from 'classnames';
import { useStore } from '../../../../hooks/useStore';
import TaskGroupStub from '../../components/TaskGroupStub/TaskGroupStub';
import { dateFormatter } from '../../../../helpers/dateFormatter';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { IconButton } from '@mui/material';

export interface TodoSectionProps {
  isOpen?: boolean;
  id: number;
}

const TaskGroup: FC<TodoSectionProps> = (props) => {
  const {
    isOpen: pIsOpen = false,
    id,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(pIsOpen);

  const { getTaskGroupInfo, switchTaskStatus } = useStore();
  const taskGroup = getTaskGroupInfo(id);

  if (!taskGroup) return null;
  if (taskGroup.tasks.length === 0) return <TaskGroupStub />;

  // TODO: change realization
  const groupTitle = useMemo(() => {
    const title = dateFormatter(new Date(taskGroup.date)).split('.');
    title.pop();

    return `${title.join('/')} Tasks`;
  }, [taskGroup]);

  const openTaskGroupHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const taskList = useMemo(() => {
    return taskGroup.tasks.map((task) => (
      <Task
        key={task.id}
        title={task.title}
        description={task.description}
        completed={task.completed}
        onSwitch={() => switchTaskStatus(id, task.id)}
      />
    ));
  }, [taskGroup.tasks, switchTaskStatus]);

  return (
    <div className={cn(styles.root, { [styles.root_closed]: !isOpen })}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <div className={styles.indicator} />
          <div className={styles.title}>{groupTitle}</div>
        </div>
        <IconButton onClick={openTaskGroupHandler}>
          <ExpandCircleDownIcon sx={{
            transform: isOpen ? 'rotate(180deg)' : '',
            transition: '.2s ease all',
            color: '#F4F4F4'
          }}/>
        </IconButton>
      </div>
      {isOpen && taskList}
    </div>
  );
};

export default TaskGroup;
