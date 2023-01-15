import styles from './IconWrapper.module.css';
import { FC, ReactNode } from 'react';

export interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper: FC<IconWrapperProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

export default IconWrapper;
