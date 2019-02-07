<template>
   <footer class="footer">
      <div class="container">
         <nav>
            <ul>
               <li>
                  <a href="https://github.com/Danon/Nesta/releases" target="_blank">
                     <translate>Application version</translate>
                     : v0.3.0
                  </a>
               <li>
                  <router-link :to="{ path: '/dashboard' }">Dashboard</router-link>
               </li>
               <li>
                  <a href="http://nesta.pl/" target="_blank">
                     <translate>Company</translate>
                  </a>
               </li>
               <li>
                  <a href="http://nesta.pl/galeria/" target="_blank">
                     <translate>Gallery</translate>
                  </a>
               </li>
               <li>
                  <a href="http://nesta.pl/ofirmie/" target="_blank">
                     <translate>About</translate>
                  </a>
               </li>
               <li>
                  <language-picker @input="changeLocale"/>
               </li>
               </li>
            </ul>
         </nav>
      </div>
   </footer>
</template>

<script>
import LanguagePicker from "@/components/LanguagePicker.vue";

export default {
    components: {LanguagePicker},

    methods: {
        changeLocale(code) {
            this.$i18n.locale = code;
        }
    }
}
</script>
