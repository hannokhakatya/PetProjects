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
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody:action.body
    }
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody : '',
        messages:[...state.messages, ({ id: 6, message: body })]
    }
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
