import { INCREMENT, DECREMENT } from "./types"

const intialState = {
  likes: 0
}

export const likesReducer = (state = intialState, action) => {

  switch(action.type) {

    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1
      }
    case DECREMENT:
      return {
        ...state,
        likes: state.likes - 1
      }

    default:
      return state;
  }
}