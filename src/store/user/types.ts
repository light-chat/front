export const SET_USERNAME = 'SET_USERNAME'

export interface UserState {
  username: string | undefined
}

interface SetUsernameAction {
  readonly type: typeof SET_USERNAME
  payload: string
}

export type UserActions = SetUsernameAction
