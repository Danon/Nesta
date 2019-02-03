<template>
   <div>
      <md-table v-model="products" :table-header-color="tableHeaderColor">
         <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell>
               <md-icon>build</md-icon>
            </md-table-cell>
            <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
            <md-table-cell md-label="For order">{{ item.order }}</md-table-cell>
            <md-table-cell md-label="Materials">{{ item.materialCost }} zł</md-table-cell>
            <md-table-cell>+</md-table-cell>
            <md-table-cell md-label="Worker Effort">{{ item.time }} minutes * {{ item.workerCost}} zł/h</md-table-cell>
            <md-table-cell md-label="Worker Cost">{{ formatWorkerCost(item) }} zł</md-table-cell>
            <md-table-cell>=</md-table-cell>
            <md-table-cell md-label="Cost">{{ formatOverallCost(item)}} zł</md-table-cell>
         </md-table-row>
      </md-table>
   </div>
</template>

<script>
export default {
    name: "simple-table",
    props: {
        tableHeaderColor: {
            type: String,
            default: ""
        }
    },

    methods: {
        formatWorkerCost(product) {
            return this.round(this.workerCost(product));
        },

        formatOverallCost(product) {
            return this.round(this.overallCost(product));
        },
        workerCost(product) {
            return product.time / 60.0 * product.workerCost;
        },

        overallCost(product) {
            return product.materialCost + this.workerCost(product)
        },

        round(price) {
            return Math.round(price * 100) / 100.0;
        }
    },

    data() {
        return {
            products: [
                {
                    name: "Dakota Rice",
                    order: "#12",
                    materialCost: 154.23,
                    time: 14,
                    workerCost: "35",
                },
                {
                    name: "Minerva Hooper",
                    order: "#12",
                    materialCost: 674.23,
                    time: 65,
                    workerCost: "25",
                },
                {
                    name: "Sage Rodriguez",
                    order: "#15",
                    materialCost: 954.23,
                    time: 43,
                    workerCost: "35",
                },
                {
                    name: "Philip Chaney",
                    order: "#15",
                    materialCost: 654.23,
                    time: 87,
                    workerCost: "25",
                },
                {
                    name: "Doris Greene",
                    order: "#27",
                    materialCost: 754.23,
                    time: 34,
                    workerCost: "35",
                },
                {
                    name: "Mason Porter",
                    order: "#94",
                    materialCost: 54.23,
                    time: 65,
                    workerCost: "30",
                }
            ]
        };
    }
};
</script>
