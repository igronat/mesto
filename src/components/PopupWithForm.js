import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor({ selector, handleCardSubmit }) {
        super(selector); //  вызываем конструктор родителя
        this._handleCardSubmit = handleCardSubmit;
        this._formElement = this._popup.querySelector('.popup__form')

    }

    _getInputValues() { //ищем импуты
        this._inputList = this._formElement.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;

        });

        return this._formValues;

    }

    closePopup() {
        super.closePopup();
        this._formElement.reset();

    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleCardSubmit(this._getInputValues());

        })

    }

}