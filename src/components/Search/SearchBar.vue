<template>
<v-container grid-list-md text-xs-left class="white--text">
  <v-row>
    <v-col cols="12" md="6" class="pb-0">
      <v-text-field
        light
        append-outer-icon="mdi-magnify"
        @click:append-outer="search"
        clearable
        @cleared="console.log('cleard')"
        hide-details
        v-model="imageName"
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
              deletable-chips
              prepend-icon="mdi-calendar"
              label="Välj startdatum"
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
              deletable-chips
              prepend-icon="mdi-calendar"
              label="Välj slutdatum"
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
        :publish="searchPress"
        :label="'Taggar'"
        :items="tags"
        :itemTextProp="'name'"
        :hint="'Välj taggar'"
        :type="'tag'"
        :multiple="true"
      />
    </v-col>
    <v-col cols="12" md="6" class="pt-0">
      <Picker 
        :publish="searchPress"
        :label="'Fotograf'"
        :items="photographers"
        :itemTextProp="'name'"
        :hint="'Välj fotograf'"
        :type="'photographer'"
        :multiple="false"
      />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
// import _ from 'lodash';
import { mapGetters, mapActions } from 'vuex';
import Picker from '@/components/Search/Picker';

export default {
  components: {
    Picker,
  },
  props: ['chipPressValue'],
  data() {
    return {
      searchPress: false,
      startDateModal: false,
      endDateModal: false,
      startDate: null,
      endDate: null,
      imageName: null,
      dates: [],
    };
  },
  computed: {
    ...mapGetters([
      'tags',
      'photographers',
      'selectedPhotographers',
      'selectedTags',
    ]),
    ...mapActions([
      'getPhotographers',
      'getTags',
      'getAllImages',
    ])
  },
  created() {
    this.getPhotographers;
    this.getTags;
    this.getAllImages;
  },
  methods: {
    search() {
      this.searchPress = true;
      setTimeout(() => {
        this.$store.dispatch('searchImages', {
          imageName: this.imageName,
          startDate: this.startDate,
          endDate: this.endDate,
          tags: this.selectedTags,
          photographerId: this.selectedPhotographers,
        })
          .then(() => {
            this.searchPress = false;
            this.$store.commit('eraseSelected');
          }, () => {
            this.$store.commit('errorSnackbar', 'Sökningen gick inte att genomföra');
          });
      }, 100);
    },
  },
}
</script>

<style scoped>

/* /deep/[role="combobox"] {
  padding-bottom: 15px;
} */
</style>
