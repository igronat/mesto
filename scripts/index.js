const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popup = document.getElementById('profile');
const popupMesto = document.getElementById('mesto');
const popupClose = popup.querySelector('.popup__close');
const popupCloseMesto = popupMesto.querySelector('.popup__close');
const buttonCreate = document.getElementById('button-create');
let profileTitle = document.querySelector('.profile__title');
let profileText = document.querySelector('.profile__text');
let formElement = popup.querySelector('.popup__form');
let formMesto = document.querySelector('.popup__mesto');
let nameInput = popup.querySelector('.popup__text_type_name');
let jobInput = popup.querySelector('.popup__text_type_job');

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const elements = document.querySelector('.elements');
const templateEl = document.querySelector('.template');
let mesto = document.querySelector('.popup__text_type_mesto');
let link = document.querySelector('.popup__text_type_link');
const popupImg = document.getElementById('img');
const popupCloseImg = popupImg.querySelector('.popup__close');

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

function cardSubmitHandler(evt) { //функция добавления карточки
    evt.preventDefault();
    const inputMesto = mesto.value;
    const inputImage = link.value;
    const cardItem = getItem({
        name: inputMesto,
        link: inputImage
    });
    elements.prepend(cardItem);
    mesto.value = '';
    link.value = '';
    close(popupMesto);

}

function render() {
    const html = initialCards.map((item) => {
        return getItem(item);
    });

    elements.append(...html);
}

function getItem(item) {
    const newItem = templateEl.content.cloneNode(true); //копируем template
    const titleEl = newItem.querySelector('.element__title');
    const imageEl = newItem.querySelector('.element__image');
    titleEl.textContent = item.name; //вставляем данные названия
    imageEl.src = item.link; //вставляем картинку

    const buttonTrash = newItem.querySelector('.element__trash'); //реализуем удаление картинки
    buttonTrash.addEventListener('click', (event) => {
        const target = event.target;
        const card = document.querySelector('.element');
        card.remove();
    });

    const buttonHeart = newItem.querySelector('.element__heart'); //ставим лайк
    buttonHeart.addEventListener('click', () =>
        buttonHeart.classList.add('element__heart_active'));

    imageEl.addEventListener('click', () => { //открываем попап для увеличения картинки
        open(popupImg);
        const imageElBigSize = popupImg.querySelector('.popup__foto');
        const titleElBigSize = popupImg.querySelector('.popup__fototext');
        imageElBigSize.src = imageEl.src;
        titleElBigSize.textContent = titleEl.textContent;
    });

    return newItem;

}

render();

editButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent; // выводим в инпут данные из профиля
    jobInput.value = profileText.textContent;
    open(popup);
});
addButton.addEventListener('click', () => open(popupMesto));
popupClose.addEventListener('click', () => close(popup));
popupCloseMesto.addEventListener('click', () => close(popupMesto));
popupCloseImg.addEventListener('click', () => close(popupImg));
formElement.addEventListener('submit', formSubmitHandler);
formMesto.addEventListener('submit', cardSubmitHandler);