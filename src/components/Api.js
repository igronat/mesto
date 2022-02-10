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

    // получаем информацию профиля
    getProfileInfo() {
        return fetch(`${this._address}/users/me`, {
            headers: {
            authorization: this._token
            }
        })
        .then(this._handleResponse);
    
    }

    // отправляем информацию об изменении профиля
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
               
            })
        })
     .then(this._handleResponse); 
 
  }

    // отправляем информацию об изменении аватара
    avatarProfile(data) {
     return fetch(`${this._address}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
           },
           body: JSON.stringify ({
               avatar: data.avatar
           })
     })
     .then(this._handleResponse); 
 
    }

    // получаем карточки
    getInitialCards() {
       return fetch(`${this._address}/cards`, {
            headers: {
            authorization: this._token
            }
        })
        .then(this._handleResponse);

    } 

    // добавляем новую карточку
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

    // отправляем информацию об удалении карточки
    deleteCard(id) {
        return fetch(`${this._address}/cards/${id}`, {
           method: 'DELETE',
           headers: {
               authorization: this._token
           }
        })
        .then(this._handleResponse);

    }

    // отправляем информацию о лайке
    putLikes(id) {
       return fetch(`${this._address}/cards/${id}/likes`, {
           method: 'PUT',
           headers: {
               authorization: this._token
           }
       })
       .then(this._handleResponse)
       
    }

    // отправляем информацию об удалении лайка
    deleteLikes(id) {
       return fetch(`${this._address}/cards/${id}/likes`, {
           method: 'DELETE',
           headers: {
               authorization: this._token
           }
       })
       .then(this._handleResponse)
       
    }

}