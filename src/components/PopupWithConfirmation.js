import Popup from '../components/Popup.js';

export default class PopupWithConfirmation extends Popup {
constructor({selector, handleCardDelete}) {
        super(selector); //  вызываем конструктор родителя
        this._delButton = this._popup.querySelector('.popup__button');
        this._handleCardDelete = handleCardDelete;
        

    }

    open(card) {
        super.open();
        this._element = card

    }

    deleteCard() {
        
        this._element.remove()

    }

    setEventListeners() {
        super.setEventListeners();
        this._delButton.addEventListener('click', () => {
           
            this._handleCardDelete(this._element);
            this.deleteCard();
            
            console.log(this._element)

        })

    }
}