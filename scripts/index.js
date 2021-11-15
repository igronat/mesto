const editButton = document.querySelector(".edit-button__link");
const popup = document.querySelector(".popup");
const popupClose = popup.querySelector(".popup__close");

function open() {
    popup.classList.add("popup__opened");
}

function close() {
    popup.classList.remove("popup__opened");
}

editButton.addEventListener("click", open);
popupClose.addEventListener("click", close);

let formElement = popup.querySelector(".popup__content")
let nameInput = popup.querySelector(".popup__text_name");
let jobInput = popup.querySelector(".popup__text_job");


function formSubmitHandler(evt) {
    evt.preventDefault();
    let profileTitle = document.querySelector(".profile__title");
    let profileText = document.querySelector(".profile__text");
    profileTitle.textContent = nameInput.value;
    profileText.textContent = jobInput.value;
    close();
}

formElement.addEventListener('submit', formSubmitHandler);