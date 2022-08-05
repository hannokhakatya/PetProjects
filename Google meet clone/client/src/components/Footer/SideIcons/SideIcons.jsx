import s from './SideIcons.module.css';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";

const SideIcons = () => {
    return (
      <div className={s.icons}>
      	<InfoOutlinedIcon />
        <GroupOutlinedIcon />
        <ChatOutlinedIcon />
        <GppMaybeOutlinedIcon />
      </div>
    );
}

export default SideIcons;