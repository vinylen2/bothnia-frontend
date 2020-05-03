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
        placeholder="Search"
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
      <v-select
        label="Årskurser"
        v-model="selectedGrades"
        :items="grades"
        item-text="grade"
        multiple
        ref="grades"
        chips
        deletable-chips
        max-height="400"
        hint="Välj årskurs"
        persistent-hint>
      </v-select>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
// import _ from 'lodash';
import { mapGetters } from 'vuex';

export default {
  props: ['chipPressValue'],
  data() {
    return {
      menu: false,
      searchString: '',
      dates: [],
      selectedGrades: [],
    };
  },
  computed: {
    ...mapGetters([
      'subjects',
      'grades',
    ]),
  },
}
</script>

<style scoped>

/deep/[role="combobox"] {
  padding-bottom: 10px;
}
</style>
