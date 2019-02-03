<template>
   <div class="content">
      <div class="md-layout">
         <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card>
               <md-card-header data-background-color="green">
                  <h4 class="title">Orders</h4>
                  <p class="category">Table presenting current orders</p>
               </md-card-header>

               <md-card-content>
                  <md-table v-model="orders">
                     <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>

                        <md-table-cell md-label="Products">
                           <span>
                              {{ item.products }} / {{ item.productsAll }}
                              <md-icon v-if="item.products === item.productsAll">done</md-icon>
                              <md-tooltip md-direction="top">Finished / All</md-tooltip>
                           </span>
                        </md-table-cell>

                        <md-table-cell md-label="Due">
                           <verbal-time v-if="item.products < item.productsAll" :date="item.due"></verbal-time>
                           <span v-else>Finished</span>
                        </md-table-cell>

                        <md-table-cell md-label="Date">
                           {{item.due.toLocaleDateString() }}
                           <md-tooltip md-direction="top">at {{ item.due.toLocaleTimeString() }}</md-tooltip>
                        </md-table-cell>

                        <md-table-cell md-label="Price">{{ asCurrency(item.price) }}</md-table-cell>

                        <md-table-cell md-label="Cost">{{ asCurrency(item.cost) }}</md-table-cell>

                        <md-table-cell md-label="Income">
                           <span :class="markupClass(item)">{{ formatItemMarkup(item) }}</span>
                           <md-tooltip md-direction="top">Incomes compared to losses</md-tooltip>
                        </md-table-cell>

                        <md-table-cell>
                           <a href="#" @click="deleteOrder()">
                              <md-icon>delete</md-icon>
                              <md-tooltip md-direction="top">Delete an order</md-tooltip>
                           </a>
                           &nbsp;&nbsp;&nbsp;
                           <a href="#" @click="sendCustomerNotification()">
                              <md-icon>send</md-icon>
                              <md-tooltip md-direction="top">Send an e-mail to customer</md-tooltip>
                           </a>
                        </md-table-cell>
                     </md-table-row>
                  </md-table>

                  <div class="md-layout-item md-size-100 text-right">
                     <md-button class="md-raised md-success" @click="createOrder()">
                        <md-icon>trending_up</md-icon>
                        &nbsp;
                        External order
                     </md-button>
                     &nbsp;
                     <md-button class="md-raised md-success" @click="createOrder()">
                        <md-icon>add</md-icon>
                        New order
                     </md-button>
                  </div>

                  <md-checkbox v-model="showArchived">
                     Show archived orders
                  </md-checkbox>
               </md-card-content>
            </md-card>
         </div>
      </div>
   </div>
</template>

<script>
import {VerbalTime} from "@/components";

export default {
    components: {VerbalTime},
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
                    due: new Date(2019, 1, 4, 0, 3, 0, 0),
                },
                {
                    id: 16,
                    name: "PL-26-00458",
                    products: 0,
                    productsAll: 1,
                    price: 561.42,
                    cost: 237.38,
                    due: new Date(2019, 1, 4, 22, 30, 0, 0),
                },
                {
                    id: 17,
                    name: "PL-03-00458",
                    products: 3,
                    productsAll: 3,
                    price: 561.42,
                    cost: 570.35,
                    due: new Date(2019, 1, 4, 0, 23, 0, 0),
                },
                {
                    id: 18,
                    name: "PL-19-00458",
                    products: 1,
                    productsAll: 14,
                    price: 1435.42,
                    cost: 87.35,
                    due: new Date(2019, 1, 5, 13, 30, 0, 0),
                },
                {
                    id: 19,
                    name: "PL-13-00458",
                    products: 0,
                    productsAll: 2,
                    price: 786.00,
                    cost: 786.00,
                    due: new Date(2019, 1, 5, 14, 30, 0, 0),
                },
                {
                    id: 20,
                    name: "PL-26-00458",
                    products: 2,
                    productsAll: 3,
                    price: 786.15,
                    cost: 237.38,
                    due: new Date(2019, 1, 25, 12, 30, 0, 0),
                }
            ]
        };
    },
    methods: {
        asCurrency(value) {
            return Math.round(value * 100) / 100.0 + ' zł';
        },

        markupClass(item) {
            return {
                "markup-green": item.price > item.cost,
                "markup-red": item.price < item.cost
            };
        },

        formatItemMarkup(item) {
            let percents = this.formatPercents(item.price / item.cost);
            return this.leadingPlus(percents);
        },

        leadingPlus(string) {
            if (string.startsWith("-")) {
                return string;
            }
            return '+' + string;
        },

        formatPercents(fraction) {
            return parseFloat((fraction - 1) * 100).toFixed(2) + "%";
        },

        createOrder() {
            this.$notify({
                message: "This feature is not ready yet. Wait for a new version of the application",
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },

        deleteOrder() {
            this.$notify({
                message: "This feature is not ready yet. Wait for a new version of the application",
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },
        sendCustomerNotification() {
            this.$notify({
                message: "This feature is not ready yet. Wait for a new version of the application",
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },

        showArchivedToggle() {
            this.$notify({
                message: "This feature is not ready yet. Wait for a new version of the application",
                type: "info" // "", "info", "success", "warning", "danger"
            });
        }
    },
    watch: {
        showArchived() {
            this.showArchivedToggle();
        }
    }
};
</script>

<style>
   .markup-green {
      color: green;
   }

   .markup-red {
      color: red;
   }
</style>
