<template>
   <div>
      <md-table v-model="notes" @md-selected="onSelect" class="reset-inline-styles">
         <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" md-auto-select>
            <md-table-cell>
               <md-field>
                  <label>
                     <translate>New note</translate>
                  </label>
                  <md-input v-model="item.value"></md-input>
               </md-field>
            </md-table-cell>
            <md-table-cell>
               <md-button class="md-just-icon md-simple md-danger" @click="onDelete(item)">
                  <md-icon>delete</md-icon>
                  <md-tooltip md-direction="top">
                     <translate>Delete</translate>
                  </md-tooltip>
               </md-button>
            </md-table-cell>
         </md-table-row>
      </md-table>

      <div v-if="!hasNotes" class="md-layout-item md-size-100 text-center no-notes-message">
         <translate>There are no notes.</translate>
      </div>

      <div class="md-layout-item md-size-100 text-right">
         <md-button class="md-raised md-success" @click="createNote()">
            <md-icon>add</md-icon>
            <translate>New note</translate>
         </md-button>
      </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
            selected: [],
            nextId: 3,
            notes: [
                {
                    id: 0, value: 'Kupić więcej Stali 203, zanim zniknie z magazynu!'
                },
                {
                    id: 1, value: "Wymienić ekspres, dlatego że kawa staje się coraz bardziej gorzka."
                },
                {
                    id: 2,
                    value: "Znaleźć pracownika który niestarranie spawa elementy."
                },
            ]
        };
    },

    methods: {
        onDelete(item) {
            this.notes = this.notes.filter(i => i.id !== item.id);
        },

        createNote() {
            this.notes.push({id: this.nextId++, value: ''});
        },

        onSelect(items) {
            this.selected = items;
        }
    },

    computed: {
        hasNotes() {
            return this.notes.length > 0;
        }
    }
};
</script>

<style scoped>
   .md-content.md-tabs-content.md-theme-default {
      height: auto !important;
   }

   .no-notes-message {
      margin-top: 50px;
      margin-bottom: 30px;
   }
</style>
