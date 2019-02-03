import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import WorkerProfile from "@/pages/WorkerProfile.vue";
import WorkerList from "@/pages/WorkerList.vue";
import Orders from "@/pages/Orders.vue";
import Products from "@/pages/Products.vue";
import Resources from "@/pages/Resources.vue";
import ResourceDefinitions from "@/pages/ResourceDefinitions.vue";

const routes = [
    {
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: Dashboard
            },
            {
                path: "workers",
                name: "Workers",
                component: WorkerList
            },
            {
                path: "workers/:id",
                name: "Worker Profile",
                component: WorkerProfile
            },
            {
                path: "orders",
                name: "Orders",
                component: Orders
            },
            {
                path: "products",
                name: "Products",
                component: Products
            },
            {
                path: "resources",
                name: "Resources",
                component: Resources
            },
            {
                path: "resource-definitions",
                name: "Resource Definitions",
                component: ResourceDefinitions
            },
            {
                path: "*",
                redirect: "Dashboard"
            }
        ]
    }
];

export default routes;
