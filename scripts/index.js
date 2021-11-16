const editButton = document.querySelector('.profile__edit-button_link');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileText = document.querySelector('.profile__text');
let formElement = popup.querySelector('.popup__content')
let nameInput = popup.querySelector('.popup__text_type_name');
let jobInput = popup.querySelector('.popup__text_type_job');

function open() {
    popup.classList.add('popup_opened'); //функцция открытия окна popup
}

function close() {
    popup.classList.remove('popup_opened'); //функцция закрытия окна popup
}

function formSubmitHandler(evt) { //функция внесения изменений в профиль
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    close();
}

editButton.addEventListener('click', open);
popupClose.addEventListener('click', close);
formElement.addEventListener('submit', formSubmitHandler);