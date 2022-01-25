export default class Popup {
    constructor(selector) {
        this._selector = document.getElementById(selector)
    }

    open() { //функция открытия окна popup
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    closePopup() { //функция закрытия окна popup
        this._selector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => { //функция закрытия попапа через esc
        if (evt.key === 'Escape') {
            this.closePopup()
        }

    }

    setEventListeners() {
        const buttonClose = this._selector.querySelector('.popup__close');
        const overlayClose = this._selector.querySelector('.popup__overlay');
        buttonClose.addEventListener('click', () => this.closePopup());
        overlayClose.addEventListener('click', () => this.closePopup());

    }
}