<template>
   <div class="content">
      <div class="md-layout">
         <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card>
               <md-card-header data-background-color="green">
                  <h4 class="title">
                     <translate>Products for orders</translate>
                  </h4>
                  <p class="category">
                     <translate>List of products for all orders</translate>
                  </p>
               </md-card-header>
               <md-card-content>
                  <products-table table-header-color="green"></products-table>
               </md-card-content>
            </md-card>
         </div>
      </div>
   </div>
</template>

<script>
import {ProductsTable} from "@/components";

export default {
    components: {
        ProductsTable
    }
};
</script>
