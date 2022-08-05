import User from './User/User';
import s from './Users.module.css';

const Users = (props) => {
  return (
    <div className={s.users}>
      {props.users.map((user) => (
        <User
          userClassName={user.isCameraOn ? 'cameraOn' : 'cameraOff'}
          name={user.name}
          userPhoto={user.userPhoto}
          isCameraOn={user.isCameraOn}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default Users;
