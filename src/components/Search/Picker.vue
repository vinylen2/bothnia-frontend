<template>
  <v-autocomplete v-if="append"
    append-outer-icon
    :label="label"
    v-model="selectedArray"
    :items="items"
    :item-text="itemTextProp"
    :hint="hint"
    multiple
    ref="tags"
    chips
    deletable-chips
    max-height="400"
    persistent-hint>
    <template v-slot:append-outer>
      <v-icon @click="test">
        mdi-plus
      </v-icon>
    </template>
  </v-autocomplete>
  <v-autocomplete v-else
    :label="label"
    v-model="selectedArray"
    :items="items"
    :item-text="itemTextProp"
    :hint="hint"
    multiple
    ref="tags"
    chips
    deletable-chips
    max-height="400"
    persistent-hint>
  </v-autocomplete>
</template>

<script>
export default {
  name: 'picker',
  props: ['label', 'items', 'selectedArray', 'hint', 'itemTextProp', 'append'],
  methods: {
    test() {
      console.log('test');
    },
  },
};
</script>