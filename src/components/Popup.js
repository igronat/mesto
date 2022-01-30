export default class Popup {
    constructor(selector) {
        this._popup = document.getElementById(selector)
    }

    open() { //функция открытия окна popup
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    closePopup() { //функция закрытия окна popup
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => { //функция закрытия попапа через esc
        if (evt.key === 'Escape') {
            this.closePopup()
        }

    }

    setEventListeners() {
        const buttonClose = this._popup.querySelector('.popup__close');
        const overlayClose = this._popup.querySelector('.popup__overlay');
        buttonClose.addEventListener('click', () => this.closePopup());
        overlayClose.addEventListener('click', () => this.closePopup());

    }
}