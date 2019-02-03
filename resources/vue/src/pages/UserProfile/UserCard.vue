<template>
   <md-card class="md-card-profile">
      <div class="md-card-avatar">
         <img class="img" :src="cardUserImage" alt="Współwłaściciel Dominik Sakłak"/>
      </div>

      <md-card-content>
         <h6 class="category text-gray">Współwłaściciel</h6>
         <h4 class="card-title">Dominik Sakłak</h4>

         <p class="card-description">Pamiętaj, że najlepszą drogą do sukcesu są chęci i sumienna praca.</p>
      </md-card-content>
   </md-card>
</template>

<script>
export default {
    name: "user-card",
    props: {
        cardUserImage: {
            type: String,
            default: require("@/assets/img/faces/marc.jpg")
        }
    },
};
</script>
