import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts'
import {connect} from 'react-redux'




// const IMyPostsContainer = (props) => {


//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state =store.getState();
//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
        
//         }
        
//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
        
//         }

//         return <MyPosts updateNewPostText = {onPostChange} addPost={addPost} posts={store.getState().profilePage.posts}
//     newPostText={store.getState().profilePage.newPostText}/>
//       }
//       }
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts:state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
          dispatch(action);
    },
    addPost: ()=> {
      dispatch(addPostActionCreator());
    }
  }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;