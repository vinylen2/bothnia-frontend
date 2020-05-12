<template>
<v-container grid-list-md text-xs-left class="white--text">
  <v-layout row wrap>
    <v-flex xs12>
      <v-text-field
        light
        prepend-icon="mdi-magnify"
        clearable
        @cleared="console.log('cleard')"
        hide-details
        v-model="searchString"
        placeholder="Sök"
        style="max-width: 500px; min-width: 128px border-radius: 25%">
      </v-text-field>
    </v-flex>
    <v-flex xs12 sm6 md4>
      <v-menu ref="menu"
        v-model="menu">
          <template v-slot:activator="{ on }">
            <v-combobox
              v-model="dates"
              multiple
              chips
              small-chips
              prepend-icon="mdi-calendar"
              label="Välj datumintervall"
              readonly
              v-on="on"
            ></v-combobox>
          </template>
          <v-date-picker v-model="dates" range></v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex xs12 sm6 md4>
      <Picker 
        :label="'Taggar'"
        :items="tags"
        :selectedArray="selectedTags"
        :itemTextProp="'name'"
        :hint="'Välj taggar'"
        :type="'tag'"
        :multiple="true"
      />
    </v-flex>
    <v-flex xs12 sm6 md4>
      <Picker 
        :label="'Fotograf'"
        :items="photographers"
        :selectedArray="selectedPhotographers"
        :itemTextProp="'name'"
        :hint="'Välj fotograf'"
        :type="'photographer'"
        :multiple="true"
      />
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
// import _ from 'lodash';
import { mapGetters } from 'vuex';
import Picker from '@/components/Search/Picker';

export default {
  components: {
    Picker,
  },
  props: ['chipPressValue'],
  data() {
    return {
      menu: false,
      searchString: '',
      dates: [],
      selectedTags: [],
      selectedPhotographers: [],
    };
  },
  computed: {
    ...mapGetters([
      'tags',
      'photographers',
    ]),
  },
}
</script>

<style scoped>

/* /deep/[role="combobox"] {
  padding-bottom: 15px;
} */
</style>
