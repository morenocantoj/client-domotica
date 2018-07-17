import { API_URL } from './urls';
import { toastr } from 'react-redux-toastr';

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

export const getController = (houseId, controllerId) => {
  console.log("GET Controller");
  const url = API_URL + '/casas/' + houseId + '/controller/' + controllerId;

  return fetch(url).then(function (response) {
    return response.json();
  })
  .catch(function (error) {
    toastr.error("Controlador", "Ha habido un error en el servidor");
    return error.json();
  })
}

export const deleteDevice = (body) => {
  console.log("DELETE device");
  const url = API_URL+'/casas/'+body.houseId+'/controller/'+body.controllerId+'/regulador/'+body.deviceId;

  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + body.token
    }
  }).then(function (response) {
    toastr.success("Dispositivo", "Dispositivo eliminado correctamente");
    return response.json();
  })
  .catch(function (error) {
    toastr.error("Dispostivo", "Ha habido un error eliminando el dispositivo");
    return error.json();
  });
}

export const editDevice = (body) => {
  console.log("PUT device");
  const url = API_URL+'/casas/'+body.houseId+'/controller/'+body.controllerId+'/regulador/'+body.deviceId;

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + body.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body.temperatura)

  }).then(function (response) {
    toastr.success("Dispositivo", "Temperatura editada correctamente");
    return response.json();
  })
  .catch(function (error) {
    toastr.error("Dispositivo", "Ha habido un error editando el dispositivo");
    return error.json();
  })
}

export const editDeviceLight = (body) => {
  console.log("PUT device light");
  const url = API_URL+'/casas/'+body.houseId+'/controller/'+body.controllerId+'/luz/'+body.deviceId;

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + body.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'status': body.status
    })

  }).then(function (response) {
    if (response.status != "200") {
      toastr.error("Dispositivo", "Ha habido un error activando/desactivando el dispositivo");
    }
  })
  .catch(function (error) {
    console.log(error)
    return error;
  })
}

export const createDevice = (body) => {
  console.log("POST device");
  const url = API_URL+'/casas/'+body.houseId+'/controller/'+body.controllerId;

  console.log(body)

  return fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + body.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre: body.nombre,
      port: body.port,
      type: body.type
    })
  }).then(function (response) {
    console.log(response);
    if (response.status == "201") {
      toastr.success("Dispostivo", "Dispositivo creado correctamente");
    } else {
      console.log(response)
      toastr.error("Dispostivo", "¡Error al crear el dispositivo!");
    }
    return response.json();

  }).catch(function (error) {
    toastr.error("Dispositivo", "Ha habido un error creando el dispositivo");
    console.log(error);
    return error;
  })
}
