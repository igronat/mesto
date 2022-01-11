export default class FormValidator {
    constructor(selector, form) {
        this._form = form;
        this._inputSelector = selector.inputSelector;
        this._submitButtonSelector = selector.submitButtonSelector;
        this._inactiveButtonClass = selector.inactiveButtonClass;
        this._inputErrorClass = selector.inputErrorClass;
        this._errorClass = selector.errorClass;

    }

    _setInputListeners() { //находим импуты
        const inputs = this._form.querySelectorAll(this._inputSelector);
        const submitButton = this._form.querySelector(this._submitButtonSelector);
        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkIfInputValid(input);
                this._toggleButtonError(inputs, submitButton)
            })
        })
    };

    _checkIfInputValid = (input) => { // вызываем - показать ошибку или скрыть ошибку
        if (!input.validity.valid) {
            this._showError(input, input.validationMessage)

        } else {
            this._hideError(input)
        }
    };

    _showError = (input, errorMessageText) => { // ищем текст ошибки
        const errorText = this._form.querySelector(`#${input.id}-error`);
        errorText.textContent = errorMessageText;
        errorText.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);

    };

    _hideError = (input) => { // убираем текст ошибки
        const errorText = this._form.querySelector(`#${input.id}-error`);
        errorText.textContent = '';
        errorText.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);

    };

    _hasInvalidInput = () => { //  ищем невалидные импуты
        const allinputs = Array.from(this._form.querySelectorAll('.popup__input'))
        return allinputs.some((el) => { return !el.validity.valid })

    };

    _toggleButtonError = (inputs, button) => { // делаем кнопку неактивной в случае невалидности формы
        if (this._hasInvalidInput(inputs)) {
            button.classList.add(this._inactiveButtonClass);
            button.disabled = true;

        } else {
            button.classList.remove(this._inactiveButtonClass);
            button.disabled = false;

        }
    }

    enableValidation = () => { // включаем валидацию
        this._setInputListeners();

    };
}