<template>
   <div class="sidebar" :data-color="activeColor" :data-image="backgroundImage" :style="sidebarStyle">
      <div class="logo">
         <a href="http://nesta.pl/" class="simple-text" :title="$t('Visit nesta.pl website')" target="_blank">
            <img :src="imgLogo" alt="Nesta SC"/>
         </a>
      </div>

      <div class="sidebar-wrapper">
         <slot name="content"></slot>
         <md-list class="nav">
            <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
            <slot>
               <sidebar-link
                     v-for="(link, index) in sidebarLinks"
                     :key="link.name + index"
                     :to="link.path"
                     :link="link">
               </sidebar-link>
            </slot>
         </md-list>
      </div>
   </div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue";

export default {
    components: {
        SidebarLink
    },
    props: {
        backgroundImage: {
            type: String,
            default: require("@/assets/img/sidebar-2.jpg")
        },
        imgLogo: {
            type: String,
            default: require("@/assets/img/nesta.png")
        },
        activeColor: {
            type: String,
            default: "green",
            validator: value => {
                let acceptedValues = ["", "purple", "blue", "green", "orange", "red"];
                return acceptedValues.indexOf(value) !== -1;
            }
        },
        sidebarLinks: {
            type: Array,
            default: () => []
        },
        autoClose: {
            type: Boolean,
            default: true
        }
    },
    provide() {
        return {
            autoClose: this.autoClose
        };
    },
    computed: {
        sidebarStyle() {
            return {
                backgroundImage: `url(${this.backgroundImage})`
            };
        }
    }
};
</script>

<style lang="scss">
   .sidebar {
      .logo img {
         max-width: 190px;
         margin: 0 25px;
      }
   }

   @media screen and (min-width: 991px) {
      .nav-mobile-menu {
         display: none;
      }
   }
</style>
