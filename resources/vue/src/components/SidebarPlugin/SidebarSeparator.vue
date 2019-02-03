<template>
   <md-divider class="sidebar-section-separator"></md-divider>
</template>

<style lang="scss">
   hr.md-divider.sidebar-section-separator {
      position: relative;
      margin-top: 10px;

      &:after {
         content: '';
         position: absolute;
         bottom: 0;
         right: 15px;
         height: 1px;
         width: calc(100% - 30px);
         background-color: rgba(180, 180, 180, 0.3);
      }
   }
</style>
