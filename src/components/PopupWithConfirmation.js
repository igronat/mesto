import Popup from '../components/Popup.js';

export default class PopupWithConfirmation extends Popup {
constructor(selector) {
        super(selector); //  вызываем конструктор родителя
        this._delButton = this._popup.querySelector('.popup__button');

    }

    open(card) {
        super.open();
        this._element = card

    }

    setSubmitAction(func) {
        this._handleCardDelete = func;

    }

    setEventListeners() {
        super.setEventListeners();
        this._delButton.addEventListener('click', () => {
            this._handleCardDelete(this._element);
            
        })

    }
}