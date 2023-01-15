import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import IconWrapper from './IconWrapper/IconWrapper';
import { FC, useMemo } from 'react';
import { CustomSwitcher } from './styles';
import { SwitchProps } from '@mui/material';

const Switcher: FC<SwitchProps> = (props) => {
  const icon = useMemo(() => {
    return (
      <IconWrapper>
        <CloseIcon sx={{ color: '#a9a9a9' }} />
      </IconWrapper>
    );
  }, []);

  const checkedIcon = useMemo(() => {
    return (
      <IconWrapper>
        <DoneIcon sx={{ color: '#a9a9a9' }} />
      </IconWrapper>
    );
  }, []);

  return (
    <CustomSwitcher
      icon={icon}
      checkedIcon={checkedIcon}
      {...props}
    />
  );
};

export default Switcher;
