import { SET_USERNAME, UserActions, UserState } from './types'

const initialUserState: UserState = {
  username: undefined
}

export const userReducer = (
  state = initialUserState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      }
    default:
      return state
  }
}
