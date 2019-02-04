<template>
   <div class="content">
      <div class="md-layout">
         <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card>
               <md-card-header data-background-color="green">
                  <h4 class="title">
                     <translate>Resources definition</translate>
                  </h4>
                  <p class="category">
                     <translate>Assignment of resources to their units</translate>
                  </p>
               </md-card-header>

               <md-card-content>
                  <md-table v-model="definitions">
                     <md-table-row slot="md-table-row" slot-scope="{ item }">
                        <md-table-cell :md-label="$t('Name')">{{ item.name }}</md-table-cell>
                        <md-table-cell :md-label="$t('Group')">{{ item.group }}</md-table-cell>
                        <md-table-cell :md-label="$t('Unit')">{{ item.unit }}</md-table-cell>
                        <md-table-cell :md-label="$t('Type')">{{ item.type }}</md-table-cell>
                        <md-table-cell>
                           <a href="#" @click="deleteDefinition()">
                              <md-icon>delete</md-icon>
                              <md-tooltip md-direction="top">
                                 <translate>Delete this definition</translate>
                              </md-tooltip>
                           </a>
                        </md-table-cell>
                     </md-table-row>
                  </md-table>
               </md-card-content>

               <div class="md-layout-item md-size-100 text-right">
                  <md-button class="md-raised md-success" @click="createDefinition">
                     <md-icon>add</md-icon>
                     <translate>Add definition</translate>
                  </md-button>
               </div>
            </md-card>
         </div>
      </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            definitions: [
                {
                    name: "Stal 205",
                    group: 'Stal',
                    type: "Materiał",
                    unit: "kg"
                },
                {
                    name: "Pręt",
                    type: "Element",
                    unit: "cm"
                },
                {
                    name: "Rurka Cienka",
                    group: 'Rurka',
                    type: "Element",
                    unit: "cm"
                },
                {
                    name: "Rurka Gruba",
                    group: 'Rurka',
                    type: "Element",
                    unit: "cm"
                },
                {
                    name: "Stal 203",
                    group: 'Stal',
                    type: "Materiał",
                    unit: "kg"
                },
                {
                    name: "Olej",
                    type: "Płyn",
                    unit: "ml",
                },
                {
                    name: "Zębatka",
                    type: "Element",
                    unit: "szt",
                },
            ]
        };
    },

    methods: {
        createDefinition() {
            this.$notify({
                message: this.$t("This feature is not ready yet. Wait for a new version of the application"),
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },

        deleteDefinition() {
            this.$notify({
                message: this.$t("This feature is not ready yet. Wait for a new version of the application"),
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        }
    }
};
</script>
