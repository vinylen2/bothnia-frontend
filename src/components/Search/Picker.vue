<template>
  <v-autocomplete v-if="append && type === 'tag'"
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
  <v-autocomplete v-else-if="append && type === 'photographer'"
    append-outer-icon
    :label="label"
    v-model="selectedArray"
    :items="items"
    :item-text="itemTextProp"
    :hint="hint"
    :item-value="'id'"
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
  <v-autocomplete v-else-if="type === 'photographer'"
    :label="label"
    v-model="selectedArray"
    :items="items"
    :item-text="itemTextProp"
    :item-value="'id'"
    :hint="hint"
    :ref="type"
    :multiple="multiple"
    chips
    deletable-chips
    max-height="400"
    persistent-hint>
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
  props: ['publish','label', 'items', 'hint', 'itemTextProp', 'append', 'type', 'multiple'],
  data: () => ({
    searchInput: null,
    selectedArray: [],
  }),
  computed: {
    computedSelected() {
      if (this.type === 'tag') {
        return this.selectedArray.length > 0 ? this.selectedArray.join(';') : null;
      } else {
        return this.selectedArray;
      }
    }
  },
  watch: {
    publish() {
      if (this.publish) {
        this.$store.commit('setSelectedArray', { 
          type: this.type,
          data: this.computedSelected,
        });
      } 
    },
  },
  methods: {
    addedItem(payload) {
      this.selectedArray.push(payload.item);
    }
  },
};
</script>