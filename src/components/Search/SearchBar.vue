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
      <v-select
        label="Ämnen"
        v-model="selectedSubjects"
        :items="subjects"
        item-text="subject"
        multiple
        ref="subjects"
        chips
        autocomplete
        deletable-chips
        max-height="400"
        hint="Välj ämnen"
        persistent-hint>
        <template slot="selection" slot-scope="data">
          <v-chip close
            @input="remove(data.item)"
            :color="data.item.color">{{data.item.subject}}
          </v-chip>
        </template>
      </v-select>
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
      searchString: '',
      selectedGrades: [],
      selectedSubjects: [],
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
</style>
