import Firebase from '../../config/Firebase.js'

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_NAME = 'UPDATE_NAME'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'
export const POSTUSER = 'POSTUSER'

export const updateEmail = email => {
  return {
      type: UPDATE_EMAIL,
      payload: email
  }
}

export const updateName = name => {
  return {
      type: UPDATE_NAME,
      payload: name
  }
}

export const updatePassword = password => {
  return {
      type: UPDATE_PASSWORD,
      payload: password
  }
}

export const login = () => {
  return async (dispatch, getState) => {
      try {
          const { email, password } = getState().user
          const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
          dispatch({ type: LOGIN, payload: response.user })
      } catch (e) {
          console.log(e)
      }
  }
}

export const signup = () => {
  return async (dispatch, getState) => {
      try {
          const { email, password } = getState().user
          const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
          dispatch({ type: SIGNUP, payload: response.user })
      } catch (e) {
          console.log(e)
      }
  }
}

export const postuser = () => {
  return async (dispatch, getState) => {
    try {
      const { email, name } = getState().user
      fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: email,
      }),
    })
    .then(response => response.json())
    .then(users => dispatch({ type: POSTUSER, payload: response.user, users }));
    } catch (e) {
      console.log(e)
  }
}
}