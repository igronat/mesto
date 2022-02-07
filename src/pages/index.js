import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
    elements,
    enableValidation,
    updateProfile,
    updateMesto,
    nameInput,
    jobInput,
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
        
    };
    const card = new Card('.template', item, handleCardClick);
    const cardElement = card.getView();
    return cardElement;

};

// создаем разметку для карточек и вставляем их
const cardList = new Section({
        renderer: (item) => {
            const card = createCard(item);
            cardList.setItem(card);
        }
    },
    elements);

// подключаем к серверу
const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-35',
  token: '4720a964-d446-4c50-91af-e4bae21204bc'
});

// попап внесения изменений в профиль
// создаём экземпляр формы
const user = new UserInfo({ name: '.profile__title', job: '.profile__text' });

api.getProfileInfo()
.then(res => {
    const profile = {
        name: res.name,
        job: res.about,
        avatar: res.avatar,
        id: res.id
    }
    user.setUserInfo(profile)
})
 .catch(err => console.log(`Ошибка при загрузке профиля: ${err}`))

const formProfile = new PopupWithForm({
    selector: 'profile',
    handleCardSubmit: (formData) => {
        api.editProfile(formData)
        .then(res => {
         user.setUserInfo(formData);
        })
        .catch(err => console.log(`Ошибка при обновлении профиля: ${err}`))
        formProfile.closePopup()

    }
});

formProfile.setEventListeners();

editButton.addEventListener('click', () => {
    //выводим в инпут данные из профиля
    const inputs = user.getUserInfo()
    nameInput.value = inputs.nameInput;
    jobInput.value = inputs.jobInput;

    formProfile.open();
    formProfileValidator.resetValidation();

});

// попап добавления новой карточки
// создаём экземпляр формы
const formMesto = new PopupWithForm({
    selector: 'mesto',
    handleCardSubmit: (data) => {
        api.addCard(data) 
        .then(res => {
            cardList.addItem(createCard({...data, id: res.id}))
        })
        .catch(err => console.log(`Ошибка при добавлении новой карточки: ${err}`))
        formMesto.closePopup();
    }
});

formMesto.setEventListeners();

addButton.addEventListener('click', () => {
    formMesto.open();
    formNewMestoValidator.resetValidation();

});

// получаем карточки с сервера
api.getInitialCards()
 .then(cards => {
cardList.renderItems(cards)
})
 .catch(err => console.log(err))