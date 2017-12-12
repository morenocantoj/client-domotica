import { API_URL } from './urls'

export const signIn = (user) => {
  console.log("signIn")
    const url = API_URL+'/login';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
    });
}
