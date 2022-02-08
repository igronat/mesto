export default class Card {
    constructor(selector, { formData }, handleCardClick, handleCardDelete, userId) {
        this._selector = selector;
        this._name = formData.name;
        this._link = formData.link;
        this._alt = formData.alt;
        this._id = formData._id;
        this._likes = formData.likes;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        
        this._cardOwnerId = formData.owner._id;
        this._userId = userId;
        console.log(this._likes)

    }
    _getItem() { // создаем карточку
        return document
            .querySelector(this._selector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    deleteCard = () => { //удалям картинку
        this._element.remove();

    }

    _likeButton = () => { // лайкаем картинку
        this._heart.classList.toggle('element__heart_active');
        
    }

    likesCount = () => {
        return this._likes = document.querySelector('.element__like');
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
        this._trash = this._element.querySelector('.element__trash')

        this._setEventListeners();

        if (this._cardOwnerId !== this._userId) {
            this._trash.classList.add('element__trash_hide')

        }

        return this._element
    };

    _setEventListeners() {
        //реализуем удаление картинки
        this._trash.addEventListener('click', this._handleCardDelete);

        //ставим лайк
        this._heart.addEventListener('click', this._likeButton);

        // открываем попап для увеличения картинки
        this._cardImage.addEventListener('click', this._handleCardClick);
    }
}