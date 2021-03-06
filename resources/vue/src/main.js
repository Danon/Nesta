// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import i18n from './plugins/i18n';
import Translate from './plugins/Translate';
import App from "./App";
import routes from "./routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

const router = new VueRouter({
    routes,
    linkExactActiveClass: "nav-item active"
});

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.component('translate', Translate);

Vue.prototype.$Chartist = Chartist;

new Vue({
    el: "#app",
    render: h => h(App),
    router,
    i18n,
    data: {Chartist}
});
