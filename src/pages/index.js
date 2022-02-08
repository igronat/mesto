import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
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
    likeCount
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

const popupDelete = new PopupWithConfirmation({
    selector: 'delete',
    handleCardDelete: (card) => {
        console.log(card)
        return api.deleteCard(card._id)
        .then(res => {
         
         popupDelete.closePopup()
         console.log(res)
        })
        .catch(err => console.log(`Ошибка удаления карточки: ${err}`))
        
        card.deleteCard()
    }
});
popupDelete.setEventListeners();

// создаем карточку и возвращаете ее
function createCard(formData) {

    const handleCardClick = () => {
        popupBigImg.open(formData); 
    };
    // открывакм попап для удаления карточки
    const handleCardDelete = () => {
        popupDelete.open(formData);
       
    };
   
    const card = new Card('.template', { formData }, handleCardClick, handleCardDelete, user.getId());
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
        id: res._id
    }
    user.setUserInfo(profile)
    
})
 .catch(err => console.log(`Ошибка при загрузке профиля: ${err}`))

const formProfile = new PopupWithForm({
    selector: 'profile',
    handleCardSubmit: (formData) => {
        api.editProfile(formData)
        .then(res => {
         user.setUserInfo({formData});
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
            cardList.addItem(createCard({...res, id: res._id}));
            formMesto.closePopup();
             
        })
        .catch(err => console.log(`Ошибка при добавлении новой карточки: ${err}`))
        
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
cardList.renderItems(cards);

})
 .catch(err => console.log(err));

 // получаем количество лайков
// api.getLikes(data._id)
//  .then(res => {
     
//      const likes = data.likes
//      console.log(likes)
// likeCount = likes
// })
// .catch(err => console.log(err))