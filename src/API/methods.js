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

export const getHouses = (body) => {
  console.log("GET Houses");
  const url = API_URL+'/casas';

  return fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + body.token
    }
    })
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log("Error geting data from ");
      return error.json();
    });
}

export const getHouse = (houseId) => {
  console.log("GET House");
  const url = API_URL + '/casas/' + houseId;

  return fetch(url).then(function (response) {
    return response.json();
  })
  .catch(function (error) {
    return error.json();
  })
}
