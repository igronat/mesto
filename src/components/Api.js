export default class Api {
  constructor({address, token}) {
    this._address = address;
    this._token = token
  }

  _handleResponse(res) {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`)

}

  getProfileInfo() {
      return fetch(`${this._address}/users/me`, {
    headers: {
      authorization: this._token
    }
    
  })
   .then(this._handleResponse);
    
  }

   editProfile(data) {
     return fetch(`${this._address}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
           },
           body: JSON.stringify ({
               name: data.name,
               about: data.job,
               id: data._id
           })
  })
   .then(this._handleResponse); 
 
  }

  getInitialCards() {
  return fetch(`${this._address}/cards`, {
    headers: {
      authorization: this._token
    }
  })
   .then(this._handleResponse);
 } 

   addCard(data) {
       return fetch(`${this._address}/cards`, {
           method: 'POST',
           headers: {
               authorization: this._token,
               'Content-Type': 'application/json'
           },
           body: JSON.stringify ({
               name: data.mesto,
               link: data.link,
               id: data.id
           })
       })
       .then(this._handleResponse);
  
   } 

   deleteCard(id) {
         return fetch(`${this._address}/cards/${id}`, {
           method: 'DELETE',
           headers: {
               authorization: this._token
           }
       })
       .then(this._handleResponse);
   }

    postLikes(data) {
       return fetch(`${this._address}/cards`, {
           method: 'POST',
           headers: {
               authorization: this._token,
               'Content-Type': 'application/json'
           },
           body: JSON.stringify ({
               likes: data.likes,
               
           })
       })
       .then(this._handleResponse)
       
}

   getLikes(id) {
       return fetch(`${this._address}/cards/${id}/likes`, {
           headers: {
               authorization: this._token
           }
       })
       .then(this._handleResponse)
       
}
}