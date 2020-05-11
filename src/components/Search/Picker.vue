<template>
  <v-autocomplete v-if="append"
    append-outer-icon
    :label="label"
    v-model="selectedArray"
    :items="items"
    :item-text="itemTextProp"
    :hint="hint"
    :multiple="multiple"
    chips
    deletable-chips
    max-height="400"
    persistent-hint>
    <template v-slot:append-outer>
      <AddDialog :type="type"/>
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
};
</script>