<template>
   <div class="content">
      <div class="md-layout">
         <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card>
               <md-card-header data-background-color="green">
                  <h4 class="title">
                     <translate>Resources</translate>
                  </h4>
                  <p class="category">
                     <translate>Amount and prices of purchased materials</translate>
                  </p>
               </md-card-header>

               <md-card-content>
                  <div>
                     <md-table v-model="resources">
                        <md-table-row slot="md-table-row" slot-scope="{ item }">
                           <md-table-cell :md-label="$t('Definition')">{{ item.definition }}</md-table-cell>
                           <md-table-cell :md-label="$t('Quantity')">{{ item.quantity }} {{ item.unit }}</md-table-cell>
                           <md-table-cell :md-label="$t('Price')">{{ item.price }} zł</md-table-cell>
                           <md-table-cell :md-label="$t('Certificate')">
                              <a href="#" v-if="item.certificate"
                                 title="Download certificate"
                                 @click="downloadCertificate()">
                                 {{ item.certificate }}
                                 <md-icon>archive</md-icon>
                                 <md-tooltip md-direction="top">
                                    <translate>Download this certificate</translate>
                                 </md-tooltip>
                              </a>
                              <a href="#" v-else
                                 title="Upload certificate for this resource"
                                 @click="uploadCertificate()">
                                 <md-icon>add</md-icon>
                                 <translate>Add certificate</translate>
                                 <md-tooltip md-direction="top">
                                    <translate>Upload new certificate</translate>
                                 </md-tooltip>
                              </a>
                           </md-table-cell>
                           <md-table-cell>
                              <a href="#" @click="editResource()">
                                 <md-icon>create</md-icon>
                                 <md-tooltip md-direction="top">
                                    <translate>Edit resource information</translate>
                                 </md-tooltip>
                              </a>
                              <a href="#" @click="transformResource()">
                                 <md-icon>transfer_within_a_station</md-icon>
                                 <md-tooltip md-direction="top">
                                    <translate>Transform resource</translate>
                                 </md-tooltip>
                              </a>
                           </md-table-cell>
                        </md-table-row>
                     </md-table>
                  </div>
               </md-card-content>

               <div class="md-layout-item md-size-100 text-right">
                  <md-button class="md-raised md-success" @click="createResource()">
                     <md-icon>add</md-icon>
                     <translate>Add resource</translate>
                  </md-button>
               </div>
            </md-card>
         </div>
      </div>
   </div>
</template>

<script>
import NewResourceDialog from './NewResourceDialog';

export default {
    components: {NewResourceDialog},
    data() {
        return {
            resources: [
                {
                    definition: "Rurka",
                    quantity: 200,
                    unit: 'cm',
                    price: 142,
                    certificate: false,
                },
                {
                    definition: "Stal 203",
                    quantity: 10,
                    unit: 'kg',
                    price: 198,
                    certificate: 'certificate.steel203.pdf',
                },
                {
                    definition: "Stal 203",
                    quantity: 2,
                    unit: 'kg',
                    price: 191,
                    certificate: 'certificate.steel203.pdf',
                },
                {
                    definition: "Stal 206",
                    quantity: 10,
                    unit: 'kg',
                    price: 250,
                    certificate: 'certificate.steel206.pdf',
                },
                {
                    definition: "Olej",
                    quantity: 1000,
                    unit: 'ml',
                    price: 14,
                    certificate: false,
                },
                {
                    definition: "Pręt",
                    quantity: 200,
                    unit: 'cm',
                    price: 149,
                    certificate: 'certificate.pręty.pdf',
                },
            ]
        };
    },

    methods: {
        createResource() {
            this.$notify({
                message: this.$t("This feature is not ready yet. Wait for a new version of the application"),
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },

        downloadCertificate() {
            this.$notify({
                message: this.$t("This feature is not ready yet. Wait for a new version of the application"),
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },

        uploadCertificate() {
            this.$notify({
                message: this.$t("This feature is not ready yet. Wait for a new version of the application"),
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },
        editResource() {
            this.$notify({
                message: this.$t("This feature is not ready yet. Wait for a new version of the application"),
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },

        transformResource() {
            this.$notify({
                message: this.$t("This feature is not ready yet. Wait for a new version of the application"),
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        },
    }
};
</script>
