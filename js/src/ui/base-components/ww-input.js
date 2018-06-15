const BaseComponent = require("./ww-base-component");

class Input extends BaseComponent {

    constructor(type = "text") {
        super("input");

        this.addClass("ww-input");
        this.setType(type);

        this.el.onAttachedToDom = () => {

        };
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

    setType(type) {
        this.el.type = type;
        return this;
    }

    setAssistiveText(text) {
        this.assistiveText = text;
        return this;
    }

    setPlaceholder(placeholder) {
        this.placeholder = placeholder;
        this.el.placeholder = placeholder;
        return this;
    }
}

module.exports = Input;