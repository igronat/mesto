export default class UserInfo {
    constructor({ name, job }) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);

    }

    getUserInfo(formData) {
        formData.name = this._name.textContent;
        formData.job = this._job.textContent;
        const infoInput = {
            nameInput: formData.name,
            jobInput: formData.job
        }

        return infoInput;

    }

    setUserInfo(formData) {
        this._name.textContent = formData.name;
        this._job.textContent = formData.job;

    }
}