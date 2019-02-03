<template>
   <div>
      <form v-if="worker">
         <md-card>
            <md-card-header :data-background-color="dataBackgroundColor">
               <h4 class="title">Edit Profile</h4>
               <p class="category">Complete worker's personal details</p>
            </md-card-header>

            <md-card-content>
               <div class="md-layout">
                  <div class="md-layout-item md-small-size-100 md-size-50">
                     <md-field>
                        <label>Worker ID</label>
                        <md-input v-model="worker.workerId" type="text"></md-input>
                     </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-50">
                     <md-field>
                        <label>Email Address (disabled)</label>
                        <md-input v-model="worker.emailAddress" type="email" disabled></md-input>
                     </md-field>
                  </div>
               </div>
            </md-card-content>
         </md-card>

         <md-card>
            <md-card-header :data-background-color="dataBackgroundColor">
               <h4 class="title">Additional personal information</h4>
            </md-card-header>

            <md-card-content>
               <div class="md-layout">
                  <div class="md-layout-item md-small-size-100 md-size-50">
                     <md-field>
                        <label>First Name</label>
                        <md-input v-model="worker.firstName" type="text"></md-input>
                     </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-50">
                     <md-field>
                        <label>Last Name</label>
                        <md-input v-model="worker.lastName" type="text"></md-input>
                     </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-33">
                     <md-field>
                        <label>Company (disabled)</label>
                        <md-input value="Nesta SC" disabled></md-input>
                     </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-33">
                     <md-field>
                        <label>Phone number</label>
                        <md-input v-model="worker.phone" type="phone"></md-input>
                     </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100 md-size-33">
                     <md-field>
                        <label>Wage</label>
                        <md-input v-model="worker.wage" type="number" min="1"></md-input>
                        <span class="suffix">zł/h</span>
                     </md-field>
                  </div>

                  <div class="md-layout-item md-size-100">
                     <md-field maxlength="5">
                        <label>Notes</label>
                        <md-textarea v-model="worker.note"></md-textarea>
                     </md-field>
                  </div>

                  <div class="md-layout-item md-size-100 text-right">
                     <md-button class="md-raised md-success" @click="updateProfile()">
                        Update Profile
                     </md-button>
                  </div>
               </div>
            </md-card-content>
         </md-card>
      </form>
      <div v-else>
         Worker not found
      </div>
   </div>
</template>

<script>
function getWorkers() {
    return [
        {
            username: "kowal",
            emailAddress: "kowalski.jan@gmail.com",
            firstName: "Jan",
            lastName: "Kowalski",
            phone: null,
            workerId: "12-4123",
            wage: 35,
            code: null,
            note: "Ten pracownik w firmie Pana Dominika wytwarza produkty ze stali."
        },
        {
            username: "h.lipski",
            emailAddress: "henryk.l@onet.pl",
            firstName: "Henryk",
            lastName: "Lipski",
            phone: null,
            workerId: "12-9223",
            wage: 30,
            code: null,
            note: "Ten pracownik w firmie Pana Dominika wytwarza produkty ze stali."
        },
        {
            username: "tomek.nowak",
            emailAddress: "nowak.tomasz@gmail.com",
            firstName: "Tomasz",
            lastName: "Nowak",
            phone: null,
            workerId: "14-5342",
            wage: 35,
            code: null,
            note: "Ten pracownik w firmie Pana Dominika wytwarza produkty ze stali."
        },
        {
            username: "my.name.is.killer",
            emailAddress: "killer@interia.pl",
            firstName: "Jerzy",
            lastName: "Kiler",
            phone: null,
            workerId: "13-8543",
            wage: 25,
            code: null,
            note: "Ten pracownik w firmie Pana Dominika wytwarza produkty ze stali."
        },
    ];
}

function getWorker(id) {
    const workers = getWorkers();
    if (id in workers) {
        return workers[id];
    }
    return null;
}

export default {
    name: "edit-profile-form",

    props: {
        dataBackgroundColor: {
            type: String,
            default: ""
        },
        workerId: {type: Number}
    },

    created() {
        this.worker = getWorker(this.workerId - 1);
    },

    data() {
        return {
            worker: null
        };
    },

    methods: {
        updateProfile() {
            this.$notify({
                message: "This feature is not ready yet. Wait for a new version of the application",
                type: "warning" // "", "info", "success", "warning", "danger"
            });
        }
    }
};
</script>

<style lang="scss">
   .md-layout-item {
      span.suffix {
         padding: 7px 7px 7px 9px;
         position: relative;
      }
   }
</style>
