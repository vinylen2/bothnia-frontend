<template>
  <v-autocomplete
    label="Taggar"
    v-model="selectedTags"
    :items="tags"
    item-text="name"
    multiple
    ref="tags"
    chips
    deletable-chips
    max-height="400"
    hint="Välj taggar"
    persistent-hint>
  </v-autocomplete>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'tag-picker',
  data: () => ({
    selectedTags: [],
  }),
  computed: {
    ...mapGetters([
      'tags',
    ]),
  },
};
</script>