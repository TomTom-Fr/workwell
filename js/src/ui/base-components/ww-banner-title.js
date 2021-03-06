import BaseComponent from "./ww-base-component";

export default class BannerTitle extends BaseComponent {

    constructor(value) {
        super("div");

        this.addClass("ww-banner__title");
        if(value)
            this.setValue(value);
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
        this.el.innerHTML = value;
        return this;
    }

}