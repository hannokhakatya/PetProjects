import { useState } from 'react';
import s from './User.module.css';
import MicOffIcon from '@mui/icons-material/MicOff';
import axios from 'axios';

const RANDOM_IMAGE_URL = '/api/randomimage';

const User = (props) => {
  const [currentUserPhoto, setCurrentUserPhoto] = useState(props.userPhoto);
  const [isCameraOn, setIsCameraOn] = useState(props.isCameraOn);

  const handleClick = async (e) => {
    try {
      const response = await axios.get(RANDOM_IMAGE_URL);
      const result = response.data.srcImage;
      setCurrentUserPhoto(result);
      if (!isCameraOn) {
        setIsCameraOn(true);
      }
       
    } catch (error) {
      alert(error);
    }
  };

  return (
    <button onClick={handleClick} className={s[props.userClassName]}>
      <div className={s.name}>{props.name}</div>
      {isCameraOn ? (
        <img src={currentUserPhoto } alt="userPhoto" />
      ) : (
        <div className={s.roundBlock}>
          <img src={currentUserPhoto} alt="userPhoto" />
          <MicOffIcon className={s.microphone} />
        </div>
      )}
    </button>
  );
};

export default User;
