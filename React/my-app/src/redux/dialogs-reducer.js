const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    messages:[...state.messages]

}
  stateCopy.messages = [...state.messages]

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      stateCopy.newMessageBody = action.body;
      return stateCopy;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      stateCopy.newMessageBody = '';
      stateCopy.messages.push({ id: 6, message: body });
      return stateCopy;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
