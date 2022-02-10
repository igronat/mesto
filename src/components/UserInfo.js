export default class UserInfo {
    constructor({ name, job, avatar}, handleAvatarEdit) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job); 
        this._avatar = document.querySelector(avatar); 
        this._handleAvatarEdit = handleAvatarEdit;

    }

    getUserInfo() {
        const infoInput = {
            nameInput: this._name.textContent,
            jobInput: this._job.textContent
        }

        return infoInput;
        
    }

    setUserInfo(formData) {
        this._name.textContent = formData.name;
        this._job.textContent = formData.job;
        this._userId = formData.id;
        this._avatar.src = formData.avatar;
        
    }

    setAvatarInfo(formData) {
        this._avatar.src = formData.avatar;
        
    }

    getId() {
        return this._userId
    }

    setEventListeners() {
        this._avatar.addEventListener('click', this._handleAvatarEdit)
    }
 
}