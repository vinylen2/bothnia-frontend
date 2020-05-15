<template>
<v-container grid-list-md text-xs-left class="white--text">
  <v-row>
    <v-col cols="12" md="6" class="pb-0">
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
    </v-col>
    <v-col cols="6" md="3">
      <v-menu ref="menu"
        v-model="startDateModal">
          <template v-slot:activator="{ on }">
            <v-combobox
              v-model="startDate"
              chips
              prepend-icon="mdi-calendar"
              label="Välj startdatum"
              readonly
              v-on="on"
            ></v-combobox>
          </template>
          <v-date-picker v-model="startDate"></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="6" md="3">
      <v-menu ref="menu"
        v-model="endDateModal">
          <template v-slot:activator="{ on }">
            <v-combobox
              v-model="endDate"
              chips
              prepend-icon="mdi-calendar"
              label="Välj slutdatum"
              readonly
              v-on="on"
            ></v-combobox>
          </template>
          <v-date-picker v-model="endDate"></v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
  <v-row class="pt-0">
    <v-col cols="12" md="6" class="pt-0">
      <Picker 
        :label="'Taggar'"
        :items="tags"
        :selectedArray="selectedTags"
        :itemTextProp="'name'"
        :hint="'Välj taggar'"
        :type="'tag'"
        :multiple="true"
      />
    </v-col>
    <v-col cols="12" md="6" class="pt-0">
      <Picker 
        :label="'Fotograf'"
        :items="photographers"
        :selectedArray="selectedPhotographers"
        :itemTextProp="'name'"
        :hint="'Välj fotograf'"
        :type="'photographer'"
        :multiple="true"
      />
    </v-col>
  </v-row>
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
      startDateModal: false,
      endDateModal: false,
      startDate: '',
      endDate: '',
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
