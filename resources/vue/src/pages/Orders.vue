<template>
   <div class="content">
      <div class="md-layout">
         <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card>
               <md-card-header data-background-color="green">
                  <h4 class="title">
                     <translate>Orders</translate>
                  </h4>
                  <p class="category">
                     <translate>Table presenting current orders</translate>
                  </p>
               </md-card-header>

               <md-card-content>
                  <md-orders-table :orders="unfinishedOrders"
                                   @delete="deleteOrder"
                                   @notify="sendCustomerNotification"/>

                  <div class="md-layout-item md-size-100 text-right">
                     <md-button class="md-raised md-success" @click="createOrder()">
                        <md-icon>trending_up</md-icon>
                        &nbsp;
                        <translate>External order</translate>
                     </md-button>
                     &nbsp;
                     <md-button class="md-raised md-success" @click="createOrder()">
                        <md-icon>add</md-icon>
                        <translate>New order</translate>
                     </md-button>
                  </div>

                  <md-checkbox v-model="showArchived">
                     <translate>Show archived orders</translate>
                  </md-checkbox>

                  <md-orders-table v-if="showArchived"
                                   :orders="finishedOrders"
                                   @delete="deleteOrder"
                                   @notify="sendCustomerNotification"/>
               </md-card-content>
            </md-card>
         </div>
      </div>
   </div>
</template>

<script>
import {VerbalTime, MdOrdersTable} from "@/components";

export default {
    components: {VerbalTime, MdOrdersTable},
    data() {
        return {
            showArchived: false,
            orders: [
                {
                    id: 15,
                    name: "PL-19-00458",
                    products: 1,
                    productsAll: 2,
                    price: 367.38,
                    cost: 237.38,
                    due: new Date(2019, 1, 6, 0, 3, 0, 0),
                },
                {
                    id: 16,
                    name: "PL-26-00458",
                    products: 0,
                    productsAll: 1,
                    price: 561.42,
                    cost: 237.38,
                    due: new Date(2019, 1, 6, 22, 30, 0, 0),
                },
                {
                    id: 17,
                    name: "PL-03-00458",
                    products: 3,
                    productsAll: 3,
                    price: 561.42,
                    cost: 570.35,
                    due: new Date(2019, 1, 6, 0, 23, 0, 0),
                },
                {
                    id: 18,
                    name: null,
                    products: 1,
                    productsAll: 14,
                    price: 1435.42,
                    cost: 87.35,
                    due: new Date(2019, 1, 7, 13, 30, 0, 0),
                },
                {
                    id: 19,
                    name: "PL-13-00458",
                    products: 0,
                    productsAll: 2,
                    price: 786.00,
                    cost: 786.00,
                    due: new Date(2019, 1, 8, 14, 30, 0, 0),
                },
                {
                    id: 17,
                    name: null,
                    products: 3,
                    productsAll: 3,
                    price: 612.61,
                    cost: 450.56,
                    due: new Date(2019, 1, 7, 0, 12, 0, 0),
                },
                {
                    id: 20,
                    name: "PL-26-00458",
                    products: 2,
                    productsAll: 3,
                    price: 786.15,
                    cost: 1237.38,
                    due: new Date(2019, 1, 25, 12, 30, 0, 0),
                }
            ]
        };
    },
    computed: {
        unfinishedOrders() {
            return this.orders.filter(order => order.products < order.productsAll);
        },
        finishedOrders() {
            return this.orders.filter(order => order.products >= order.productsAll);
        }
    },

    methods: {
        createOrder() {
            this.$notify({
                message: this.$t("This feature is not ready yet. Wait for a new version of the application"),
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },

        deleteOrder(order) {
            this.$notify({
                message: this.$t("This feature is not ready yet. Wait for a new version of the application"),
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },

        sendCustomerNotification(order) {
            this.$notify({
                message: this.$t("This feature is not ready yet. Wait for a new version of the application"),
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },

        showArchivedToggle() {
            this.$notify({
                message: this.$t("This feature is not ready yet. Wait for a new version of the application"),
                type: "info" // "", "info", "success", "warning", "danger"
            });
        }
    }
};
</script>
