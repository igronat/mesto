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

    getView() {
        this._element = this._getItem();
        this._elemen.querySelector('.element__title').textContent = this._name; //вставляем данные названия
        this._elemen.querySelector('.element__image').src = this._link; //вставляем картинку
        this._elemen.querySelector('[alt="фото"]').alt = this._alt; //вставляем описание картинки
        return this._element
    }


}