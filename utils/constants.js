export const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Фото Архыза'
}, {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Фото Челябинской области'
}, {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Фото годода Иваново'
}, {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Фото Камчатки'
}, {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Фото Холмогорского района'
}, {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Фото Байкала'
}];

export const elements = document.querySelector('.elements');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const popupProfile = document.getElementById('profile');
const popupMesto = document.getElementById('mesto');
const popupImg = document.getElementById('img');
export const editButton = document.querySelector('.profile__edit-button ');
export const addButton = document.querySelector('.profile__add-button');
export const nameInput = document.querySelector('.popup__text_type_name');
export const jobInput = document.querySelector('.popup__text_type_job');
export const mesto = document.querySelector('.popup__text_type_mesto');
export const link = document.querySelector('.popup__text_type_link');
const profileCloseButton = popupProfile.querySelector('.popup__close');
const popupCloseMesto = popupMesto.querySelector('.popup__close');
const popupCloseImg = popupImg.querySelector('.popup__close');
const overlayProfile = document.getElementById('overlay__profile');
const overlayMesto = document.getElementById('overlay__mesto');
const overlayImg = document.getElementById('overlay__img');
const profileForm = popupProfile.querySelector('.popup__form');
const formMesto = document.querySelector('.popup__mesto');
export const updateProfile = document.querySelector('.popup__profile');
export const updateMesto = document.querySelector('.popup__mesto');

export const enableValidation = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});