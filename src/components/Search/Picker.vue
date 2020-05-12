<template>
  <v-autocomplete v-if="append"
    append-outer-icon
    :label="label"
    v-model="selectedArray"
    :items="items"
    :item-text="itemTextProp"
    :hint="hint"
    :multiple="multiple"
    :search-input.sync="searchInput"
    chips
    deletable-chips
    max-height="400"
    persistent-hint>
    <template v-slot:no-data>
      <v-row align="center" class="pa-0">
        <v-col align="center" class="pa-0">
          <AddDialog :type="type" :searchInput="searchInput"
            @addedItem="addedItem"/>
        </v-col>
      </v-row>
    </template>
  </v-autocomplete>
  <v-autocomplete v-else
    :label="label"
    v-model="selectedArray"
    :items="items"
    :item-text="itemTextProp"
    :hint="hint"
    :ref="type"
    :multiple="multiple"
    chips
    deletable-chips
    max-height="400"
    persistent-hint>
  </v-autocomplete>
</template>

<script>
import AddDialog from '@/components/Image/AddDialog';

export default {
  components: {
    AddDialog,
  },
  name: 'picker',
  props: ['label', 'items', 'selectedArray', 'hint', 'itemTextProp', 'append', 'type', 'multiple'],
  data: () => ({
    searchInput: null,
  }),
  methods: {
    addedItem(item) {
      console.log(item);
      this.selectedArray.push(item);
    },
  },
};
</script>