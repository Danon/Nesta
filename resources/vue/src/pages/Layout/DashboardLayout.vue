<template>
   <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
      <notifications></notifications>

      <side-bar>
         <mobile-menu slot="content"></mobile-menu>
         <sidebar-link to="/dashboard">
            <md-icon>dashboard</md-icon>
            <p>Dashboard</p>
         </sidebar-link>

         <sidebar-separator/>

         <sidebar-link to="/orders">
            <md-icon>shopping_cart</md-icon>
            <p>Orders</p>
         </sidebar-link>

         <sidebar-link to="/products">
            <md-icon>build</md-icon>
            <p>Products</p>
         </sidebar-link>

         <sidebar-link to="/resources">
            <md-icon>list</md-icon>
            <p>Resources</p>
         </sidebar-link>

         <sidebar-link to="/resource-definitions">
            <md-icon>rate_review</md-icon>
            <p>Resource definitions</p>
         </sidebar-link>

         <sidebar-separator/>

         <sidebar-link to="/workers">
            <md-icon>person</md-icon>
            <p>Workers</p>
         </sidebar-link>

         <sidebar-link to="#" class="position-bottom" @click="download()">
            <md-icon>archive</md-icon>
            <p>Download raports</p>
         </sidebar-link>
      </side-bar>

      <div class="main-panel">
         <top-navbar></top-navbar>

         <dashboard-content></dashboard-content>

         <content-footer></content-footer>
      </div>
   </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
    components: {
        TopNavbar,
        DashboardContent,
        ContentFooter,
        MobileMenu
    },

    methods: {
        download() {
            this.$notify({
                message: "This feature is not ready yet. Wait for a new version of the application",
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        }
    }
};
</script>
