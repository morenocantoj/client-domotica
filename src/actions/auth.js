import { signIn } from '../API/methods';
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const loginSuccess = (user) => {
  console.log("logginSuccess")
  return {
    type: LOGIN,
    user
  }
}

const logoutSuccess = () => {
  return {
    type: LOGOUT,
  }
}

export const login = (username, password) => {
  return function (dispatch)  {
    signIn({login: username, password: password}).then((body) => {
      const user = {
        name: username,
        token: body.token
      }
      dispatch(loginSuccess(user));
    })
    .catch((error) => {
      console.log("Error autenticando");
    });
  };
}
