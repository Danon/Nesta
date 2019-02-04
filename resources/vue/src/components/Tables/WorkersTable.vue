<template>
   <div>
      <md-table v-model="workers" :table-header-color="tableHeaderColor">
         <md-table-row slot="md-table-row" slot-scope="{ item }" @click="showWorker(item.id)" class="cursor-pointer">
            <md-table-cell>
               <md-icon>person_outline</md-icon>
            </md-table-cell>
            <md-table-cell :md-label="$t('Name')">{{ item.name }}</md-table-cell>
            <md-table-cell :md-label="$t('Salary')">{{ item.salary }} zł</md-table-cell>
            <md-table-cell :md-label="$t('Products')">{{ item.finishedProcuts }}</md-table-cell>
            <md-table-cell :md-label="$t('Average speed')">
               {{ item.average }}
               <translate>min / product</translate>
            </md-table-cell>
         </md-table-row>
      </md-table>
   </div>
</template>

<style>
   .cursor-pointer {
      cursor: pointer;
   }
</style>

<script>
export default {
    props: {
        tableHeaderColor: {
            type: String,
            default: ""
        }
    },

    methods: {
        showWorker(id) {
            this.$router.push({name: 'Worker Profile', params: {id}})
        }
    },

    data() {
        return {
            workers: [
                {
                    id: 1,
                    name: "Jan Kowalski",
                    salary: "36,738",
                    finishedProcuts: 142,
                    average: 42,
                },
                {
                    id: 2,
                    name: "Henryk Lipski",
                    salary: "23,738",
                    finishedProcuts: 97,
                    average: 45,
                },
                {
                    id: 3,
                    name: "Tomasz Nowak",
                    salary: "56,142",
                    finishedProcuts: 65,
                    average: 34,
                },
                {
                    id: 4,
                    name: "Jerzy Kiler",
                    salary: "38,735",
                    finishedProcuts: 13,
                    average: 76,
                }
            ]
        };
    }
};
</script>
