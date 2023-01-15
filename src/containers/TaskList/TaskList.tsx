import styles from './TaskList.module.css';
import CurrentTasks from './containers/CurrentTasks/CurrentTasks';
import { useStore } from '../../hooks/useStore';
import TaskGroup from './components/TaskGroup/TaskGroup';
import { dateFormatter } from '../../helpers/dateFormatter';
import { IconButton, Popover } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { RefObject, useRef, useState } from 'react';
import Switcher from '../../components/Switcher/Switcher';

const todosIsCurrent = (date: Date): boolean => {
  return dateFormatter(new Date()) === dateFormatter(new Date(date));
};

const TaskList = () => {
  const { taskList, newsMarqueeIsEnabled, setNewsMarqueeIsEnabled } = useStore();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const popoverIsOpen = Boolean(anchorEl);
  const popoverId = popoverIsOpen ? 'simple-popover' : undefined;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>
          To Do
        </div>
        <div>
          <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
            <SettingsIcon
              sx={{
                color: '#f4f4f4',
              }}
            />
          </IconButton>
          <Popover
            id={popoverId}
            open={popoverIsOpen}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <div className={styles.dropDown}>
              News marquee enabled:
              <Switcher
                onClick={() => setNewsMarqueeIsEnabled(!newsMarqueeIsEnabled)}
                checked={newsMarqueeIsEnabled}
              />
            </div>
          </Popover>
        </div>
      </div>
      <div className={styles.content}>
        {taskList.map((item) => {
          if (todosIsCurrent(item.date)) return (
            <CurrentTasks
              id={item.id}
              key={item.id}
            />
          );

          return (
            <TaskGroup
              id={item.id}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
