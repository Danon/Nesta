<template>
   <!--<ul class="language-picker">-->
   <div class="language-picker round-borders" @click="toggle(language)">
      <img :src="language.flag" :alt="language.name"/>
      {{language.name}}
   </div>
</template>

<script>
export default {
    props: {
        en: {default: require("@/assets/img/flags/en.png")},
        pl: {default: require("@/assets/img/flags/pl.png")}
    },

    data() {
        let languages = {
            pl: {code: 'pl', name: "Polski", flag: this.pl, toggleTo: 'en'},
            en: {code: 'en', name: "English", flag: this.en, toggleTo: 'pl'},
        };
        return {
            language: languages.pl,
            languages
        };
    },

    methods: {
        toggle(language) {
            this.language = this.languages[language.toggleTo];
            this.$emit('input', language.code);
        }
    }
}
</script>

<style scoped lang="scss">
   .language-picker {
      background-color: #ffffff87;
      border-radius: 3px;
      padding: 10px 15px;
      cursor: pointer;

      img {
         margin-right: 5px;
         width: 16px;
         height: 11px;
         margin-top: -3px;
      }
   }
</style>
