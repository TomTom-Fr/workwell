import BaseComponent from "./ww-base-component";

export default class Button extends BaseComponent {

    constructor(text) {
        super("button");

        this.addClass("ww-button");
        this.setText(text);
        this.el.buttonType = "default";
    }

    getText() {
        return this.el.innerHTML;
    }

    setText(text) {
        this.text = text;
        this.el.innerHTML = text;
        return this;
    }

    disable() {
        this.el.setAttribute("disabled", "");
        return this;
    }

    enable() {
        this.el.removeAttribute("disabled");
        return this;
    }

    onClick(fn) {
        this.el.addEventListener("click", fn);
        return this;
    }

    getType() {
        return this.el.buttonType;
    }

    setType(type) {
        if (type === "default")
            this.removeClass("ww-button-" + this.el.buttonType);
        this.addClass("ww-button-" + type);
        this.el.buttonType = type;
        return this;
    }
}