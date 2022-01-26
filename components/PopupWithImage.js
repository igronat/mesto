import Popup from '../components/Popup.js';
export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector); //  вызываем конструктор родителя
        // this._handleCardClick = handleCardClick;
        this._name = name;
        this._link = link.src;
        // this._alt = alt;
    }

    open() { //функция открытия окна popup
        super.open();

        document.querySelector('.popup__foto') = this._link;
        document.querySelector('.popup__fototext').textContent = this._name;
        document.querySelector('.popup__foto').alt = this._alt;
    }

}