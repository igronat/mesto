export default class Card {
    constructor(selector, { formData }, handleCardClick, handleCardDelete, userId, handleCardLike) {
        this._selector = selector;
        this._name = formData.name;
        this._link = formData.link;
        this._alt = formData.alt;
        this._id = formData._id;
        this._likes = formData.likes.length;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleCardLike = handleCardLike;
        
        this._cardOwnerId = formData.owner._id;
        this._userId = userId;

        this._isLike = formData.likes.some(item => item._id == this._userID);

    }
    _getItem() { // создаем карточку
        return document
            .querySelector(this._selector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    deleteCard = () => { //удалям картинку
        this._element.remove()
        
    }

    likeCard(formData) {
        this._countLikes.textContent = formData.likes.length;
        this._isLike = !this._isLike;
        if (this._heart.classList.contains('element__heart_active')) {
            this._heart.classList.remove('element__heart_active')
        } else {
            this._heart.classList.add('element__heart_active')
        }

    }

    getIsLike() {
        return this._isLike
        
    }

    getId() {
        return this._id
    }

    getView() {
        this._element = this._getItem();
        this._heart = this._element.querySelector('.element__heart');
        this._cardImage = this._element.querySelector('.element__image');
        this._element.querySelector('.element__title').textContent = this._name; //вставляем данные названия
        this._cardImage.src = this._link; //вставляем картинку
        this._cardImage.alt = `Фото ${this._name}`; //вставляем описание картинки
        this._trash = this._element.querySelector('.element__trash');
        this._countLikes = this._element.querySelector('.element__like');
         if (this._heart.classList.contains('element__heart_active')) {
            this._isLike
        }
        
        this._countLikes.textContent = this._likes;

        this._setEventListeners();
        
        if (this._cardOwnerId !== this._userId) {
            this._trash.classList.add('element__trash_hide')
        }

        return this._element

    }

    _setEventListeners() {
        //реализуем удаление картинки
        this._trash.addEventListener('click', this._handleCardDelete);

        //ставим лайк
        this._heart.addEventListener('click', this._handleCardLike);

        // открываем попап для увеличения картинки
        this._cardImage.addEventListener('click', this._handleCardClick);
    }
}