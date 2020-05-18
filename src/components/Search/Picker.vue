<template>
<v-form ref="form2" v-model="valid">
  <v-autocomplete v-if="append && type === 'tag'"
    prepend-icon="mdi-tag"
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
    prepend-icon="mdi-account"
    :item-value="'id'"
    :rules="rules"
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
    prepend-icon="mdi-account"
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
    prepend-icon="mdi-tag"
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
</v-form>
</template>

<script>
import AddDialog from '@/components/Image/AddDialog';

export default {
  components: {
    AddDialog,
  },
  name: 'picker',
  props: ['publish','label', 'items', 'hint', 'itemTextProp', 'append', 'type', 'multiple', 'add'],
  data: () => ({
    valid: false,
    searchInput: null,
    selectedArray: [],
    rules: [
      v => (typeof(v) !== 'object') || 'Fältet måste fyllas i',
    ],
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
    add() {
      this.$refs.form2.validate();
    },
  },
  methods: {
    addedItem(payload) {
      this.selectedArray.push(payload.item);
    }
  },
};
</script>