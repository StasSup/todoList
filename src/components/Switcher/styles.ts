import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';

export const CustomSwitcher = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 30,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 25,
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2.5,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#ffffff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#10c200',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 25,
    height: 25,
    borderRadius: '50%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: '20px',
    opacity: 1,
    backgroundColor: '#366eff',
    boxSizing: 'border-box',
  },
}));
