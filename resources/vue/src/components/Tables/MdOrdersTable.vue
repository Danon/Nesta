<template>
   <md-table v-model="orders">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
         <md-table-cell :md-label="$t('Name')">{{ item.name }}</md-table-cell>

         <md-table-cell :md-label="$t('Products')">
            <span>
               {{ item.products }} / {{ item.productsAll }}
               <md-icon v-if="item.products === item.productsAll">done</md-icon>
               <md-tooltip md-direction="top">
                  <translate>Finished / All</translate>
               </md-tooltip>
            </span>
         </md-table-cell>

         <md-table-cell :md-label="$t('Due')">
            <verbal-time v-if="item.products < item.productsAll" :date="item.due"></verbal-time>
            <translate v-else>Finished</translate>
         </md-table-cell>

         <md-table-cell :md-label="$t('Date')">
            {{item.due.toLocaleDateString() }}
            <md-tooltip md-direction="top">at {{ item.due.toLocaleTimeString() }}</md-tooltip>
         </md-table-cell>

         <md-table-cell :md-label="$t('Price')">{{ asCurrency(item.price) }}</md-table-cell>

         <md-table-cell :md-label="$t('Cost')">{{ asCurrency(item.cost) }}</md-table-cell>

         <md-table-cell :md-label="$t('Income')">
            <span :class="markupClass(item)">{{ formatItemMarkup(item) }}</span>
            <md-tooltip md-direction="top">
               <translate>Incomes compared to losses</translate>
            </md-tooltip>
         </md-table-cell>

         <md-table-cell>
            <a href="#" @click="deleteOrder()">
               <md-icon>delete</md-icon>
               <md-tooltip md-direction="top">
                  <translate>Delete an order</translate>
               </md-tooltip>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="#" @click="sendCustomerNotification()">
               <md-icon>send</md-icon>
               <md-tooltip md-direction="top">
                  <translate>Send an e-mail to customer</translate>
               </md-tooltip>
            </a>
         </md-table-cell>
      </md-table-row>
   </md-table>
</template>

<script>
import VerbalTime from "../VerbalTime";

export default {
    components: {VerbalTime},
    name: "OrdersTable",
    props: {
        orders: {
            default: []
        }
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

    }
}
</script>

<style scoped>
   .markup-green {
      color: green;
   }

   .markup-red {
      color: red;
   }
</style>
