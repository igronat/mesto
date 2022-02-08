export default class UserInfo {
    constructor({ name, job}) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job); 
        
        console.log(this._userId)

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
        

    }

    getId() {
        return this._userId
    }

   
}