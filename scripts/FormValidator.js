export default class FormValidator {
    constructor(selector, form) {
        this._form = form;
        this._inputSelector = selector.inputSelector;
        this._submitButtonSelector = selector.submitButtonSelector;
        this._inactiveButtonClass = selector.inactiveButtonClass;
        this._inputErrorClass = selector.inputErrorClass;
        this._errorClass = selector.errorClass;
        this._inputList = this._form.querySelectorAll(this._inputSelector);
        this._submitButton = this._form.querySelector(this._submitButtonSelector);

    }

    _setInputListeners() { //находим импуты
        this._inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkIfInputValid(input);
                this._toggleButtonError();

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
        const allinputs = Array.from(this._inputList)
        return allinputs.some((el) => { return !el.validity.valid })

    };

    _toggleButtonError = () => { // делаем кнопку неактивной в случае невалидности формы
        if (this._hasInvalidInput(this._inputList)) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.disabled = true;

        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = false;

        }
    };

    resetValidation() {
        this._toggleButtonError();

        this._inputList.forEach((inputElement) => {
            this._hideError(inputElement) //  очищаем ошибки
        });

    };

    enableValidation = () => { // включаем валидацию
        this._setInputListeners();

    };
}