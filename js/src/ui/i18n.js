const defaultLocale = "en";
let locale = defaultLocale;

const i18n = {
    en: {
        "cancel-search-input": "Cancel",
        "required": "Required",
        "add-photo": "Add Photo",
        "add-another-photo": "Add Another Photo",
        "remove-photo": "Remove",
        "replace-photo": "Replace",
        "choose-image-error": "There was an error! Please retry choosing an image."
    },
    fr: {
        "cancel-search-input": "Annuler",
        "required": "Requis",
        "add-photo": "Ajouter une photo",
        "add-another-photo": "Ajouter une photo",
        "remove-photo": "Supprimer",
        "replace-photo": "Remplacer",
        "choose-image-error": "Une erreur est survenue ! Veuillez choisir une image à nouveau."
    },
    ja: {
        "cancel-search-input": "キャンセル",
        "required": "必須",
        "add-photo": "画像を追加",
        "add-another-photo": "続けて画像を追加",
        "remove-photo": "削除",
        "replace-photo": "置き換え",
        "choose-image-error": "エラーが発生しました。もう一度画像を選択して見てください。"
    }
};

export function get(locale, key) {
    return i18n[locale][key];
}

export function getLocale() {
    if (window.localStorage.workwellUserLocale)
        return window.localStorage.workwellUserLocale;
    else
        return defaultLocale;
}

export function setLocale(locale_) {
    locale_ = locale_.split("-")[0];
    for (let key in i18n) {
        if (key === locale_) {
            locale = locale_;
            break;
        }
    }
    window.localStorage.workwellUserLocale = locale;
    //refreshLocalizedElements(locale);
}
