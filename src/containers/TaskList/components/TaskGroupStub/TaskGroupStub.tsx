import { memo } from 'react';
import styles from './TaskGroupStub.module.css';

const TaskGroupStub = memo(() => {
  return (
    <div className={styles.root}>
      You have no tasks
    </div>
  );
});

export default TaskGroupStub;
