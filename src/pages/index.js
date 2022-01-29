import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
    initialCards,
    elements,
    enableValidation,
    updateProfile,
    updateMesto,
    nameInput,
    jobInput,
    mesto,
    link,
    addButton,
    editButton
} from '../utils/constants.js';
import './index.css';

// делаем валидацию
const formProfileValidator = new FormValidator(enableValidation, updateProfile);
const formNewMestoValidator = new FormValidator(enableValidation, updateMesto);
formProfileValidator.enableValidation();
formNewMestoValidator.enableValidation();

// попап увеличения картинки
const popupBigImg = new PopupWithImage('img');
popupBigImg.setEventListeners();

// создаем карточку и возвращаете ее
function createCard(item) {
    const handleCardClick = () => {
        popupBigImg.open(item);
        
    }
    const card = new Card('.template', item, handleCardClick);
    const cardElement = card.getView();
    return cardElement;


};

// создаем разметку для карточек и вставляем их
const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            const html = createCard(item);
            cardList.setItem(html);
        }
    },
    elements);

cardList.renderItems();

// попап внесения изменений в профиль
// создаём экземпляр формы
const form = new UserInfo({ name: '.profile__title', job: '.profile__text' });
const formProfile = new PopupWithForm({
    selector: 'profile',
    handleCardSubmit: (formData) => {
        form.setUserInfo(formData);

    }
});

formProfile.setEventListeners();

editButton.addEventListener('click', (formData) => {
    //выводим в инпут данные из профиля
    const inputs = form.getUserInfo(formData)
    nameInput.value = inputs.nameInput;
    jobInput.value = inputs.jobInput;

    formProfile.open();
    formProfileValidator.resetValidation();

});

// попап добавления новой карточки
// создаём экземпляр формы
const formMesto = new PopupWithForm({
    selector: 'mesto',
    handleCardSubmit: () => {
        const card = {
            name: mesto.value,
            link: link.value
        };
        elements.prepend(createCard(card));

    }
});

formMesto.setEventListeners();

addButton.addEventListener('click', () => {
    formMesto.open();
    formNewMestoValidator.resetValidation();

});