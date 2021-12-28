export default class Card {
    constructor(selector, name, link, alt) {
        this._selector = selector;
        this._name = name;
        this._link = link;
        this._alt = alt;
    }
    _getItem() { // создаем карточку
        return document
            .querySelector(this._selector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    _deleteCardButton = () => {
        this._element.remove();
    }

    _likeButton = () => {
        this._element.querySelector('.element__heart').classList.toggle('element__heart_active')
    }

    _openBigSize = () => {
        const popupImg = document.getElementById('img');
        popupImg.classList.add('popup_opened');
        popupImg.querySelector('.popup__fototext').textContent = this._name; //вставляем данные названия
        popupImg.querySelector('.popup__foto').src = this._link; //вставляем картинку
        popupImg.querySelector('[alt="фото"]').alt = this._alt; //вставляем описание картинки
    }

    getView() {
        this._element = this._getItem();
        this._element.querySelector('.element__title').textContent = this._name; //вставляем данные названия
        this._element.querySelector('.element__image').src = this._link; //вставляем картинку
        this._element.querySelector('[alt="фото"]').alt = this._alt; //вставляем описание картинки

        //реализуем удаление картинки
        this._element.querySelector('.element__trash').addEventListener('click', this._deleteCardButton);

        //ставим лайк
        this._element.querySelector('.element__heart').addEventListener('click', this._likeButton);

        // открываем попап для увеличения картинки
        this._element.addEventListener('click', this._openBigSize);

        return this._element
    }


}