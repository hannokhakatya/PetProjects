import * as React from 'react';
import s from './Menu.module.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FeedbackIcon from '@mui/icons-material/Feedback';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const menuItems = [
  { title: 'Дошка для конференцій', icon: <BorderColorOutlinedIcon /> },
  { title: 'Записувати зустріч', icon: <RadioButtonCheckedIcon /> },
  { title: 'Змінити макет', icon: <DashboardIcon /> },
  { title: 'Повноекранний режим', icon: <FullscreenIcon /> },
  { title: 'Застосувати візуальні ефект', icon: <ClosedCaptionOffIcon /> },
  { title: 'Увімкнути субтитри', icon: <AutoAwesomeIcon /> },
  {
    title: 'Використовувати телефон для передачі звуку',
    icon: <PhoneForwardedIcon />,
  },
  { title: 'Повідомити про проблему', icon: <FeedbackIcon /> },
  { title: 'Повідомити про порушення', icon: <ReportGmailerrorredIcon /> },
  { title: 'Вирішення проблем і довідка', icon: <TravelExploreIcon /> },
  { title: 'Налаштування', icon: <SettingsOutlinedIcon /> },
];

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentTitle, setCurrentTitle] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={s.button}
        id="basic-button"
        aria-controls={openMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleClick}
      >
        {<MoreVertIcon className={s.icon_menu} />}
      </Button>
      <Menu
        className={s.menu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItems.map(({ title, icon }) => (
          <Tooltip title={title} placement="right" key={title}>
            <MenuItem
              onClick={() => {
                setCurrentTitle(title);
                handleOpenDialog();
              }}
            >
              {icon} {title}
            </MenuItem>
          </Tooltip>
        ))}
        <Dialog onClose={handleCloseDialog} open={open}>
          <DialogTitle>{currentTitle}</DialogTitle>
        </Dialog>
      </Menu>
    </div>
  );
}
