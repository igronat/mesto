import Popup from '../components/Popup.js';
export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector); //  вызываем конструктор родителя

        this._name = this._selector.querySelector('.popup__fototext');
        this._link = this._selector.querySelector('.popup__foto');
        this._alt = this._selector.querySelector('.popup__foto');

    }

    open({ name, link, alt }) { //функция открытия окна popup
        super.open();

        this._link.src = link;
        this._name.textContent = name;
        this._alt.alt = alt;

    }

}