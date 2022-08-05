import s from './MiddleIcons.module.css';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import CallEndIcon from '@mui/icons-material/CallEnd';
import PanToolIcon from '@mui/icons-material/PanTool';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import BasicMenu from '../Menu/Menu';

const MiddleIcons = () => {
  return (
    <div className={s.icons}>
      <MicIcon />
      <VideocamIcon />
      <PresentToAllIcon />
      <ClosedCaptionOffIcon />
      <PanToolIcon />
      <BasicMenu />
      <CallEndIcon />
    </div>
  );
};

export default MiddleIcons;
