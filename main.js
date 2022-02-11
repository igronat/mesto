(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){var c,u,s=this,l=n.formData;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u=function(){s._element.remove()},(c="deleteCard")in this?Object.defineProperty(this,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):this[c]=u,this._selector=e,this._name=l.name,this._link=l.link,this._alt=l.alt,this._id=l._id,this._likes=l.likes.length,this._handleCardClick=r,this._handleCardDelete=o,this._handleCardLike=a,this._cardOwnerId=l.owner._id,this._userId=i,this._isLikesId=l.likes,this._isLike=this._isLikesId.some((function(e){return e._id===s._userId}))}var n,r;return n=t,(r=[{key:"_getItem",value:function(){return document.querySelector(this._selector).content.querySelector(".element").cloneNode(!0)}},{key:"likeCard",value:function(e){this._countLikes.textContent=e.likes.length,this._isLike=!this._isLike,this._isLike?this._heart.classList.add("element__heart_active"):this._heart.classList.remove("element__heart_active")}},{key:"getIsLike",value:function(){return this._isLike}},{key:"getView",value:function(){return this._element=this._getItem(),this._heart=this._element.querySelector(".element__heart"),this._cardImage=this._element.querySelector(".element__image"),this._element.querySelector(".element__title").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt="Фото ".concat(this._name),this._trash=this._element.querySelector(".element__trash"),this._countLikes=this._element.querySelector(".element__like"),this._countLikes.textContent=this._likes,this._setEventListeners(),this._cardOwnerId!==this._userId&&this._trash.classList.add("element__trash_hide"),this._isLike&&this._heart.classList.add("element__heart_active"),this._element}},{key:"_setEventListeners",value:function(){this._trash.addEventListener("click",this._handleCardDelete),this._heart.addEventListener("click",this._handleCardLike),this._cardImage.addEventListener("click",this._handleCardClick)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_checkIfInputValid",(function(e){e.validity.valid?o._hideError(e):o._showError(e,e.validationMessage)})),r(this,"_showError",(function(e,t){var n=o._form.querySelector("#".concat(e.id,"-error"));n.textContent=t,n.classList.add(o._errorClass),e.classList.add(o._inputErrorClass)})),r(this,"_hideError",(function(e){var t=o._form.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(o._errorClass),e.classList.remove(o._inputErrorClass)})),r(this,"_hasInvalidInput",(function(){return Array.from(o._inputList).some((function(e){return!e.validity.valid}))})),r(this,"_toggleButtonError",(function(){o._hasInvalidInput(o._inputList)?(o._submitButton.classList.add(o._inactiveButtonClass),o._submitButton.disabled=!0):(o._submitButton.classList.remove(o._inactiveButtonClass),o._submitButton.disabled=!1)})),r(this,"enableValidation",(function(){o._setInputListeners()})),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=this._form.querySelectorAll(this._inputSelector),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var t,o;return t=e,(o=[{key:"_setInputListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkIfInputValid(t),e._toggleButtonError()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonError(),this._inputList.forEach((function(t){e._hideError(t)}))}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.map((function(e){return t._renderer(e)}))}},{key:"setItem",value:function(e){this._container.append(e)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.closePopup()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.getElementById(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this,t=this._popup.querySelector(".popup__close"),n=this._popup.querySelector(".popup__overlay");t.addEventListener("click",(function(){return e.closePopup()})),n.addEventListener("click",(function(){return e.closePopup()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._name=t._popup.querySelector(".popup__fototext"),t._link=t._popup.querySelector(".popup__foto"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;f(_(a.prototype),"open",this).call(this),this._link.src=n,this._name.textContent=t,this._link.alt="Фото ".concat(t)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function k(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t,n=e.selector,r=e.handleCardSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleCardSubmit=r,t._formElement=t._popup.querySelector(".popup__form"),t._inputList=t._formElement.querySelectorAll(".popup__input"),t._submitButton=t._formElement.querySelector(".popup__button"),t._initialText=t._submitButton.textContent,t}return t=a,n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"closePopup",value:function(){m(O(a.prototype),"closePopup",this).call(this),this._formElement.reset()}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitButton.textContent=e?t:this._initialText}},{key:"setEventListeners",value:function(){var e=this;m(O(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleCardSubmit(e._getInputValues())}))}}],n&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){var n=t.name,r=t.job,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{nameInput:this._name.textContent,jobInput:this._job.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.job,this._userId=e.id,this._avatar.src=e.avatar}},{key:"getId",value:function(){return this._userId}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.address,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._headers=r}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"editProfile",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then(this._handleResponse)}},{key:"avatarProfile",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.mesto,link:e.link,id:e.id})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"putLikes",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteLikes",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function x(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._delButton=t._popup.querySelector(".popup__button"),t}return t=a,(n=[{key:"open",value:function(e){R(T(a.prototype),"open",this).call(this),this._element=e}},{key:"setSubmitAction",value:function(e){this._handleCardDelete=e}},{key:"setEventListeners",value:function(){var e=this;R(T(a.prototype),"setEventListeners",this).call(this),this._delButton.addEventListener("click",(function(){e._handleCardDelete(e._element)}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u),V=document.querySelector(".elements"),A=document.querySelector(".profile__edit-button "),U=document.querySelector(".profile__add-button"),N=document.querySelector(".profile__image"),J=document.querySelector(".popup__text_type_name"),H=document.querySelector(".popup__text_type_job"),M=document.querySelector(".popup__profile"),z=document.querySelector(".popup__mesto"),$={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}document.querySelector(".element__image");var W=new o($,M),X=new o($,z),Y=new o($,UpdateAvatar);W.enableValidation(),X.enableValidation(),Y.enableValidation();var Z=new y("img");Z.setEventListeners();var ee=new D("delete");ee.setEventListeners();var te=new j({selector:"avatar",handleCardSubmit:function(e){te.renderLoading(!0),ce.avatarProfile(e).then((function(e){var t={name:e.name,job:e.about,avatar:e.avatar,id:e._id};ae.setUserInfo(t),te.closePopup()})).catch((function(e){return console.log("Ошибка удаления карточки: ".concat(e))})).finally((function(){te.renderLoading(!1)}))}});te.setEventListeners();var ne=new j({selector:"profile",handleCardSubmit:function(e){ne.renderLoading(!0),ce.editProfile(e).then((function(e){var t={name:e.name,job:e.about,avatar:e.avatar,id:e._id};ae.setUserInfo(t),ne.closePopup()})).catch((function(e){return console.log("Ошибка при обновлении профиля: ".concat(e))})).finally((function(){ne.renderLoading(!1)}))}});ne.setEventListeners();var re=new j({selector:"mesto",handleCardSubmit:function(e){re.renderLoading(!0),ce.addCard(e).then((function(e){ie.addItem(oe(K(K({},e),{},{id:e._id}))),re.closePopup()})).catch((function(e){return console.log("Ошибка при добавлении новой карточки: ".concat(e))})).finally((function(){re.renderLoading(!1)}))}});function oe(e){var n=new t(".template",{formData:e},(function(){Z.open(e)}),(function(){ee.open(e),ee.setSubmitAction((function(){ce.deleteCard(n._id).then((function(e){n.deleteCard(),ee.closePopup()})).catch((function(e){return console.log("Ошибка удаления карточки: ".concat(e))}))}))}),ae.getId(),(function(){n.getIsLike()?ce.deleteLikes(n._id).then((function(e){n.likeCard(e)})).catch((function(e){return console.log("Не убирается лайк: ".concat(e))})):ce.putLikes(n._id).then((function(e){n.likeCard(e)})).catch((function(e){return console.log("Не проставляется лайк: ".concat(e))}))}));return n.getView()}re.setEventListeners();var ie=new a({renderer:function(e){var t=oe(e);ie.setItem(t)}},V),ae=new S({name:".profile__title",job:".profile__text",avatar:".profile__image"}),ce=new L({address:"https://mesto.nomoreparties.co/v1/cohort-35",headers:{authorization:"4720a964-d446-4c50-91af-e4bae21204bc","Content-Type":"application/json"}}),ue=ce.getProfileInfo().then((function(e){return e})).catch((function(e){return console.log("Ошибка при загрузке профиля: ".concat(e))})),se=ce.getInitialCards().then((function(e){return e})).catch((function(e){return console.log("Ошибка при загрузке карточек: ".concat(e))}));Promise.all([ue,se]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ae.setUserInfo({name:o.name,job:o.about,avatar:o.avatar,id:o._id}),ie.renderItems(i)})).catch((function(e){console.log("Ошибка получения данных с сервера: ".concat(e))})),A.addEventListener("click",(function(){var e=ae.getUserInfo();J.value=e.nameInput,H.value=e.jobInput,ne.open(),W.resetValidation()})),U.addEventListener("click",(function(){re.open(),X.resetValidation()})),N.addEventListener("click",(function(){te.open(),Y.resetValidation()}))})();