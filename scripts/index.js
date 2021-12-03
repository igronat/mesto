const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popup = document.getElementById('profile');
console.log(popup);
const popupMesto = document.getElementById('mesto');
console.log(popupMesto);
const popupClose = popup.querySelector('.popup__close');
console.log(popupClose);
const popupCloseMesto = popupMesto.querySelector('.popup__close');
console.log(popupCloseMesto);
const buttonSave = popup.querySelector('button-save');
const buttonCreate = popupMesto.querySelector('button-create');
let profileTitle = document.querySelector('.profile__title');
let profileText = document.querySelector('.profile__text');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__text_type_name');
let jobInput = popup.querySelector('.popup__text_type_job');

function open(evt) {
    evt.classList.add('popup_opened'); //функция открытия окна popup 

}

function close(evt) {
    evt.classList.remove('popup_opened'); //функция закрытия окна popup 

}

function formSubmitHandler(evt) { //функция внесения изменений в профиль
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    close(popup);
}

editButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent; // выводим в инпут данные из профиля
    jobInput.value = profileText.textContent;
    open(popup);
});

addButton.addEventListener('click', () => open(popupMesto));
popupClose.addEventListener('click', () => close(popup));
popupCloseMesto.addEventListener('click', () => close(popupMesto));
formElement.addEventListener('submit', formSubmitHandler);