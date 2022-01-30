export default class Section {
    constructor({ renderer }, selector) {
        this._renderer = renderer; // renderer — это функция
        this._container = selector;
    }

    renderItems(items) {
        items.map(item => this._renderer(item));
    }

    setItem(element) {
        this._container.append(element);
    }

    addItem(element) {
        this._container.prepend(element);

    }
}