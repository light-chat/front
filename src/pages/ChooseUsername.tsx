import { ChangeEvent, Dispatch, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SET_USERNAME, UserActions } from '../store/user/types'

export function ChooseUsername() {
  const [username, setUsername] = useState('')
  const userDispatch = useDispatch<Dispatch<UserActions>>()

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const submitForm = (event: FormEvent) => {
    event.preventDefault()
    userDispatch({ type: SET_USERNAME, payload: username })
  }

  return (
    <div>
      <h1>Quel est donc votre pseudonyme ?</h1>
      <form onSubmit={(event) => submitForm(event)}>
        <input type="text" onChange={onUsernameChange} placeholder="Pseudonyme" name="username" />
        <input type="submit" placeholder="Valider" />
      </form>
    </div>
  )
}
