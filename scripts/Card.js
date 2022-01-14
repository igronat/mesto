export default class Card {
    constructor(selector, name, link, alt, cardClickHandler) {
        this._selector = selector;
        this._name = name;
        this._link = link;
        this._alt = alt;
        this._cardClickHandler = cardClickHandler;


    }
    _getItem() { // создаем карточку
        return document
            .querySelector(this._selector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    _deleteCardButton = () => { //удалям картинку
        this._element.remove();
    }

    _likeButton = () => { // лайкаем картинку
        this._heart.classList.toggle('element__heart_active')
    }

    _openBigSize = () => { // открываем большую картинку
        this._cardClickHandler();
        document.querySelector('.popup__foto').src = this._link;
        document.querySelector('.popup__fototext').textContent = this._name;
        document.querySelector('[alt="фото"]').textContent = this._alt;

    }

    getView() {
        this._element = this._getItem();
        this._heart = this._element.querySelector('.element__heart');
        this._cardImage = this._element.querySelector('.element__image');
        this._element.querySelector('.element__title').textContent = this._name; //вставляем данные названия
        this._cardImage.src = this._link; //вставляем картинку
        this._cardImage.alt = this._alt; //вставляем описание картинки

        this._setEventListeners();

        return this._element
    }
    _setEventListeners() {
        //реализуем удаление картинки
        this._element.querySelector('.element__trash').addEventListener('click', this._deleteCardButton);

        //ставим лайк
        this._heart.addEventListener('click', this._likeButton);

        // открываем попап для увеличения картинки
        this._cardImage.addEventListener('click', this._openBigSize);
    }


}