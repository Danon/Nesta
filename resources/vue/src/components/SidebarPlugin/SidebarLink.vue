<template>
   <md-list-item @click="click()" v-bind="$attrs" class="sidebar-link-disable-capitalize">
      <slot>
         <md-icon>{{ link.icon }}</md-icon>
         <p>{{ link.name }}</p>
      </slot>
   </md-list-item>
</template>

<script>
export default {
    inject: {
        autoClose: {
            default: true
        }
    },
    props: {
        link: {
            type: [String, Object],
            default: () => {
                return {
                    name: "",
                    path: "",
                    icon: ""
                };
            }
        },
        tag: {
            type: String,
            default: "router-link"
        }
    },

    methods: {
        click() {
            this.$emit('click');
            this.hideSidebarOnMobile();
        },

        hideSidebarOnMobile() {
            if (this.autoClose && this.$sidebar && this.$sidebar.showSidebar === true) {
                this.$sidebar.displaySidebar(false);
            }
        }
    }
};
</script>

<style>
   .sidebar-link-disable-capitalize p {
      text-transform: none;
   }
</style>
