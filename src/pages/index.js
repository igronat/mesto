import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Popup from '../components/Popup.js';
import {
    elements,
    enableValidation,
    updateProfile,
    updateMesto,
    nameInput,
    jobInput,
    addButton,
    editButton,
    element,
    avatar
} from '../utils/constants.js';
import './index.css';

// делаем валидацию
const formProfileValidator = new FormValidator(enableValidation, updateProfile);
const formNewMestoValidator = new FormValidator(enableValidation, updateMesto);
const formNewAvatarValidator = new FormValidator(enableValidation, UpdateAvatar);
formProfileValidator.enableValidation();
formNewMestoValidator.enableValidation();
formNewAvatarValidator.enableValidation();

// попап увеличения картинки
const popupBigImg = new PopupWithImage('img');
popupBigImg.setEventListeners();

// попап удаления картинки
const popupDelete = new PopupWithConfirmation('delete');
popupDelete.setEventListeners();

// попап внесения изменений в аватар
const popupAvatar = new PopupWithForm({
    selector: 'avatar',
    handleCardSubmit: (formData) => {
        popupAvatar.renderLoading(true)
        api.avatarProfile(formData)
        .then(res => {
            const profile = {
                name: res.name,
                job: res.about,
                avatar: res.avatar,
                id: res._id
            }
            user.setUserInfo(profile);
            popupAvatar.closePopup()
        })
        .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
        .finally(() => {
            popupAvatar.renderLoading(false)
        })
    }
});
popupAvatar.setEventListeners();

// попап внесения изменений в профиль
const formProfile = new PopupWithForm({
    selector: 'profile',
    handleCardSubmit: (formData) => {
        formProfile.renderLoading(true)
        api.editProfile(formData)
        .then(res => {
            const profile = {
                name: res.name,
                job: res.about,
                avatar: res.avatar,
                id: res._id
            }
            user.setUserInfo(profile);
            formProfile.closePopup();
        })
        .catch(err => console.log(`Ошибка при обновлении профиля: ${err}`))
        .finally(() => {
            formProfile.renderLoading(false)
        })
        
    }
});
formProfile.setEventListeners();

// попап добавления новой карточки
const formMesto = new PopupWithForm({
    selector: 'mesto',
    handleCardSubmit: (data) => {
        formMesto.renderLoading(true)
        api.addCard(data) 
        .then(res => {
            cardList.addItem(createCard({...res, id: res._id}));
            formMesto.closePopup();   
        })
        .catch(err => console.log(`Ошибка при добавлении новой карточки: ${err}`))
        .finally(() => {
            formMesto.renderLoading(false)
            
        }) 
    }
});
formMesto.setEventListeners();

// создаем карточку и возвращаете ее
function createCard(formData) {

    // открываем попап для уувеличения картинки
    const handleCardClick = () => {
        popupBigImg.open(formData); 
    };

    // открываем попап для удаления карточки и удаляем ее
    const handleCardDelete = () => {
        popupDelete.open(formData);
        popupDelete.setSubmitAction(() => {
        api.deleteCard(card._id)
        .then(res => {
            card.deleteCard();
            popupDelete.closePopup()
        })
        .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
        })
    };

    //  реализовываем лайк
    const handleCardLike = () => {
        if (!card.getIsLike()) {
            api.putLikes(card._id)
            .then(res => {
                card.likeCard(res);
                })
            .catch(err => console.log(`Не проставляется лайк: ${err}`))
        } else {
            api.deleteLikes(card._id)
            .then(res => {
                card.likeCard(res);
                })
            .catch(err => console.log(`Не убирается лайк: ${err}`))
        }
    };

    // создаем карточку
    const card = new Card(
        '.template', 
        { formData }, 
        handleCardClick, 
        handleCardDelete, 
        user.getId(),
        handleCardLike
        );
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

// создаем юзера
const user = new UserInfo({ name: '.profile__title', job: '.profile__text', avatar: '.profile__image' });

// подключаем к серверу
const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-35',
  headers: {
      authorization: '4720a964-d446-4c50-91af-e4bae21204bc',
      'Content-Type': 'application/json'
  }
  
});

// получаем с сервера данные юзера
const getInfoUser =
    api.getProfileInfo()
    .then(userData => {
        return userData
    })
    .catch(err => console.log(`Ошибка при загрузке профиля: ${err}`));



// получаем карточки с сервера
const getCards =
    api.getInitialCards()
    .then(cards => {
        return cards

    })
    .catch(err => console.log(`Ошибка при загрузке карточек: ${err}`));


// объединяем запрос данных профиля и получения карточек
Promise.all([getInfoUser, getCards])
  .then(([userData, cards]) => {
    //   запрос данных профиля
      user.setUserInfo({
            name: userData.name,
            job: userData.about,
            avatar: userData.avatar,
            id: userData._id
        })
       
        // запрос данных профиля и получения карточек
        cardList.renderItems(cards);
  })
  .catch(err => {console.log(`Ошибка получения данных с сервера: ${err}`)});

// кнопка редактирования профиля
editButton.addEventListener('click', () => {
    //выводим в инпут данные из профиля
    const inputs = user.getUserInfo()
    nameInput.value = inputs.nameInput;
    jobInput.value = inputs.jobInput;
    formProfile.open();
    formProfileValidator.resetValidation();

});

// кнопка добавления новой карточки
addButton.addEventListener('click', () => {
    formMesto.open();
    formNewMestoValidator.resetValidation();

});

// открываем попап для изменения аватара
avatar.addEventListener('click', () => {
    popupAvatar.open();
    formNewAvatarValidator.resetValidation();
    
});



