import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img src="https://www.biletik.aero/upload/medialibrary/807/807f262b60da392f1e09aa6d33f20a9b.png" alt='Ava'></img>
        {props.message}
        <div>{props.likeCount}</div>
      </div>
    </div>
  );
};

export default Post;
