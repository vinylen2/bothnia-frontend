<template>
<div>
    <v-tooltip left v-if="!isLoggedIn">
      <template v-slot:activator="{on}">
        <v-btn bottom right fixed fab v-on="on">
          <v-icon>mdi-image-plus</v-icon>
        </v-btn>
      </template>
      <span>Logga in för att ladda upp bild</span>
    </v-tooltip>
    <v-btn v-else
      @click="uploadDialog = true"
      bottom
      right
      fixed
      fab>
      <v-icon>mdi-image-plus</v-icon>
    </v-btn>
  <v-dialog v-model="uploadDialog">
    <v-card>
      <v-card-title>
        <span class="headline">
          Ladda upp bild
        </span>
        </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col>
                <v-file-input
                  label="File input"
                  filled
                  v-model="image"
                  accept="image/*"
                  prepend-icon="mdi-camera">
                </v-file-input>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <TagPicker />
              </v-col>
              <v-col>
                {{image}}
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-btn color="red darken-1" text @click="closeDialog">Stäng</v-btn>
              <v-btn color="blue darken-1" text @click="uploadImage">Spara</v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
  /* eslint-disable no-unused-vars */
import { mapGetters } from 'vuex';
import TagPicker from '@/components/Search/TagPicker';

import ExifReader from 'exifreader';

export default {
  name: 'upload-image',
  components: {
    TagPicker,
  },
  data: () => ({
    uploadDialog: false,
    valid: false,
    rules: [
      v => !!v || 'Fältet måste fyllas i',
    ],
    firstname: '',
    lastname: '',
    image: null,
  }),
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'token',
    ]),
  },
  watch: {
    image() {
      if (this.image) {
        this.extractMetaData();
      }
    },
  },
  methods: {
    /* eslint-disable no-console */
    closeDialog() {
      this.uploadDialog = false;
      this.resetFields();
      this.$emit('closeDialog');
    },
    resetFields() {
      this.firstname = '';
      this.lastname = '';
    },
    extractMetaData() {
      console.log(typeof(this.image));
      // const tags = ExifReader.load(this.image);
      // console.log(tags);
    },
    uploadImage() {

    },
  },
};
</script>