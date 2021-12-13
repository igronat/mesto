const enableValidation = ({ formSelector, ...rest }) => { // собираем все формы
    const forms = document.querySelectorAll(formSelector);
    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        })
        setInputListeners(form, rest);
    })

};

const setInputListeners = (form, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => { //находим импуты
    const inputs = form.querySelectorAll(inputSelector);
    const submitButton = form.querySelector(submitButtonSelector);
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkIfInputValid(form, input, rest);
            toggleButtonError(inputs, submitButton, inactiveButtonClass)
        })
    })
};

const checkIfInputValid = (form, input, { inputErrorClass, errorClass }) => { // вызываем - показать ошибку или скрыть ошибку
    if (!input.validity.valid) {
        showError(form, input, input.validationMessage, errorClass, inputErrorClass, )
    } else {
        hideError(form, input, inputErrorClass, errorClass)
    }
};

const showError = (form, input, errorMessageText, errorClass, inputErrorClass) => { // ищем текст ошибки
    const errorText = form.querySelector(`#${input.id}-error`);
    errorText.textContent = errorMessageText;
    errorText.classList.add(errorClass);
    input.classList.add(inputErrorClass);
};

const hideError = (form, input, errorClass, inputErrorClass) => { // убираем текст ошибки
    const errorText = form.querySelector(`#${input.id}-error`);
    errorText.textContent = '';
    errorText.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
    console.log(input)
};

const hasInvalidInput = (inputs) => { //  ищем невалидные импуты
    return Array.from(inputs).some((el) => !el.validity.valid);

};

const toggleButtonError = (inputs, button, inactiveButtonClass) => { // делаем кнопку неактивной в случае невалидности формы
    if (hasInvalidInput(inputs)) {
        button.classList.add(inactiveButtonClass);
        button.disabled = true;

    } else {
        button.classList.remove(inactiveButtonClass);
        button.disabled = false;

    }
}

enableValidation({ // функция, отвественная за включение валидации форм
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});