<template>
   <div class="content">
      <div class="md-layout">
         <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card class="md-card-plain">
               <md-card-header data-background-color="green">
                  <h4 class="title">Workers statistics</h4>
                  <p class="category">List of workers productiveness</p>
               </md-card-header>
               <md-card-content>
                  <workers-table></workers-table>
               </md-card-content>

               <div class="md-layout-item md-size-100 text-right">
                  <md-button class="md-raised md-success" @click="createWorker()">
                     <md-icon>add</md-icon>
                     Invite worker
                  </md-button>
               </div>
            </md-card>
         </div>
      </div>
   </div>
</template>

<script>
import {WorkersTable} from "@/components";

export default {
    components: {
        WorkersTable
    },

    methods: {
        createWorker() {
            this.$notify({
                message: "This feature is not ready yet. Wait for a new version of the application",
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },
    }
};
</script>
