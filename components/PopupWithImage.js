import Popup from '../components/Popup.js';
export default class PopupWithImage extends Popup {
    constructor(selector, data) {
        super(selector); //  вызываем конструктор родителя
        // this._handleCardClick = handleCardClick;
        this._name = this._selector.querySelector('.popup__fototext').textContent;
        this._link = this._selector.querySelector('.popup__foto').src;
        this._alt = this._selector.querySelector('.popup__foto').alt;
        this._nameCard = data.querySelector('.element__title').textContent;
        // this._linkCard = data.querySelector('.element__image').src;
        // this._altCard = data.querySelector('.element__image').alt;
    }

    open() { //функция открытия окна popup
        super.open();

        this._link = this._linkCard;
        // document.querySelector('.element__title').textContent = this._name;
        // document.querySelector('.element__image').alt = this._alt;
    }

}