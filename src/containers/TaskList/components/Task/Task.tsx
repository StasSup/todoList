import styles from './Task.module.css';
import { FC, useCallback } from 'react';
import Switcher from '../../../../components/Switcher/Switcher';
import cn from 'classnames';

export interface TaskProps {
  title: string;
  description: string;
  completed: boolean;
  isActive?: boolean;
  onSwitch?: () => void;
}

const Task: FC<TaskProps> = (props) => {
  const {
    title,
    description,
    completed,
    isActive = false,
    onSwitch = () => undefined,
  } = props;

  return (
    <div className={styles.root}>
      <div className={cn(styles.indicator, { [styles.indicator_active]: isActive })} />
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={cn(styles.title, { [styles.title_completed]: completed })}>
            {title}
          </div>
          <div className={styles.description}>
            {description}
          </div>
        </div>
        <Switcher
          onClick={onSwitch}
          checked={completed}
        />
      </div>
    </div>
  );
};

export default Task;
