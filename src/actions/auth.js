import { signIn } from '../API/methods';
import { toastr } from 'react-redux-toastr';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

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
      toastr.success("Login", "Te has logueado correctamente");
      dispatch(loginSuccess(user));
    })
    .catch((error) => {
      toastr.error("Login", "Usuario o contraseña no válidos");
      console.log("Error autenticando");
    });
  };
}
