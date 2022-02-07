export default class UserInfo {
    constructor({ name, job}) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);

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

    }
}