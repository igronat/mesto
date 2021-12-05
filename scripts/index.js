const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popup = document.getElementById('profile');
const popupMesto = document.getElementById('mesto');
const popupClose = popup.querySelector('.popup__close');
const popupCloseMesto = popupMesto.querySelector('.popup__close');
const buttonCreate = document.getElementById('button-create');
const profileTitle = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const formElement = popup.querySelector('.popup__form');
const formMesto = document.querySelector('.popup__mesto');
const nameInput = popup.querySelector('.popup__text_type_name');
const jobInput = popup.querySelector('.popup__text_type_job');

const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: 'Фото Архыза'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: 'Фото Челябинской области'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt: 'Фото годода Иваново'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: 'Фото Камчатки'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: 'Фото Холмогорского района'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: 'Фото Байкала'
    }
];

const elements = document.querySelector('.elements');
const templateEl = document.querySelector('.template');
const mesto = document.querySelector('.popup__text_type_mesto');
const link = document.querySelector('.popup__text_type_link');
const popupImg = document.getElementById('img');
const popupCloseImg = popupImg.querySelector('.popup__close');
const imageElBigSize = popupImg.querySelector('.popup__foto');
const titleElBigSize = popupImg.querySelector('.popup__fototext');
const altElBigSize = popupImg.querySelector('[alt="фото"]');

function openPopup(evt) {
    evt.classList.add('popup_opened'); //функция открытия окна popup 

}

function closePopup(evt) {
    evt.classList.remove('popup_opened'); //функция закрытия окна popup 

}

function handleFormSubmit(evt) { //функция внесения изменений в профиль
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    closePopup(popup);
}

function handleCardSubmit(evt) { //функция добавления карточки
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
    closePopup(popupMesto);

}

function render() {
    const html = initialCards.map((item) => {
        return getItem(item);
    });

    elements.append(...html);
}

function getItem(item) { // создаем карточку
    const newItem = templateEl.content.cloneNode(true); //копируем template
    const titleEl = newItem.querySelector('.element__title');
    const imageEl = newItem.querySelector('.element__image');
    const altEl = newItem.querySelector('[alt="фото"]');
    titleEl.textContent = item.name; //вставляем данные названия
    imageEl.src = item.link; //вставляем картинку
    altEl.alt = item.alt; //вставляем описание картинки

    const buttonTrash = newItem.querySelector('.element__trash'); //реализуем удаление картинки
    buttonTrash.addEventListener('click', (event) => {
        const target = event.target;
        const card = buttonTrash.closest('.element');
        card.remove();
    });

    const buttonHeart = newItem.querySelector('.element__heart'); //ставим лайк
    buttonHeart.addEventListener('click', () =>
        buttonHeart.classList.toggle('element__heart_active'));

    imageEl.addEventListener('click', () => { //открываем попап для увеличения картинки
        openPopup(popupImg);
        imageElBigSize.src = imageEl.src;
        titleElBigSize.textContent = titleEl.textContent;
        altElBigSize.alt = altEl.alt;

    });

    return newItem;

}

render();

editButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent; // выводим в инпут данные из профиля
    jobInput.value = profileText.textContent;
    openPopup(popup);
});
addButton.addEventListener('click', () => openPopup(popupMesto));
popupClose.addEventListener('click', () => closePopup(popup));
popupCloseMesto.addEventListener('click', () => closePopup(popupMesto));
popupCloseImg.addEventListener('click', () => closePopup(popupImg));
formElement.addEventListener('submit', handleFormSubmit);
formMesto.addEventListener('submit', handleCardSubmit);