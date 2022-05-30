import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer'



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi,how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
      ],
      newPostText: 'it-kamasutra',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Katya' },
        { id: 2, name: 'Lena' },
        { id: 3, name: 'Nastya' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Julia' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: "I'm fine" },
        { id: 4, message: 'Yo' },
      ],
      newMessageBody: '',
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);


    this._callSubscriber(this._state);
    }
};



export default store;
window.store = store;
