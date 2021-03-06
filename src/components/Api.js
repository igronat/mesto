export default class Api {
    constructor({address, headers}) {
        this._address = address;
        this._headers = headers
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
            headers: this._headers
        })
        .then(this._handleResponse);
    
    }

    // отправляем информацию об изменении профиля
    editProfile(data) {
     return fetch(`${this._address}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
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
        headers: this._headers,
        body: JSON.stringify ({
            avatar: data.avatar
        })
     })
     .then(this._handleResponse); 
 
    }

    // получаем карточки
    getInitialCards() {
       return fetch(`${this._address}/cards`, {
            headers: this._headers
        })
        .then(this._handleResponse);

    } 

    // добавляем новую карточку
    addCard(data) {
       return fetch(`${this._address}/cards`, {
           method: 'POST',
           headers: this._headers,
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
           headers: this._headers
        })
        .then(this._handleResponse);

    }

    // отправляем информацию о лайке
    putLikes(id) {
       return fetch(`${this._address}/cards/${id}/likes`, {
           method: 'PUT',
           headers: this._headers
       })
       .then(this._handleResponse)
       
    }

    // отправляем информацию об удалении лайка
    deleteLikes(id) {
       return fetch(`${this._address}/cards/${id}/likes`, {
           method: 'DELETE',
           headers: this._headers
       })
       .then(this._handleResponse)
       
    }

}