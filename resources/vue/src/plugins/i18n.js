import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './messages';

window.missingKeys = {};
Vue.use(VueI18n);

let vueI18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    silentTranslationWarn: true,
    messages: messages,
    missing: (locale, key) => {
        console.error(key);
        window.missingKeys[key] = {pl: key};
        return key;
    }
});

export default vueI18n;
