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
            <span :class="markupClass(item)" class="d-flex justify-content-between ws-no-wrap">
               <span>{{ formatAbsoluteMarkup(item) }}</span>
               <span>{{ formatPercentageMarkup(item) }}</span>
            </span>
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

        formatAbsoluteMarkup(item) {
            if (item.price === item.cost) {
                return '0.00';
            }
            return this.leadingPlus(this.formatPrice(item.price - item.cost)) + 'zł';
        },
        formatPercentageMarkup(item) {
            if (item.price === item.cost) {
                return '';
            }
            let percentageIncrease = this.leadingPlus(this.formatPercentageIncrease(item.price / item.cost));
            return '(' + percentageIncrease + ')';
        },

        leadingPlus(string) {
            if (string.startsWith("-")) {
                return string;
            }
            return '+' + string;
        },

        formatPercentageIncrease(fraction) {
            return parseFloat((fraction - 1) * 100).toFixed(2) + '%';
        },

        formatPrice(fraction) {
            return parseFloat(fraction).toFixed(2);
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

   .ws-no-wrap {
      white-space: nowrap;
   }

   .d-flex {
      display: flex;
   }

   .justify-content-between {
      justify-content: space-between;;
   }
</style>
