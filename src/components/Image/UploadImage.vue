<template>
<div>
  <v-btn text color="white"
    :hover="false"
    @click="uploadDialog = true">
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
                  label="Välj bild"
                  filled
                  v-model="image"
                  accept=".jpg, .jpeg"
                  prepend-icon="mdi-camera">
                </v-file-input>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <Picker 
                  :label="'Taggar'"
                  :items="tags"
                  :selectedArray="selectedTags"
                  :itemTextProp="'name'"
                  :hint="'Välj taggar'"
                />
              </v-col>
              <v-col cols="6">
                <Picker 
                  :label="'Fotograf'"
                  :items="photographers"
                  :selectedArray="selectedPhotographers"
                  :itemTextProp="'fName'"
                  :hint="'Välj fotograf'"
                  :append="true"
                />
              </v-col>
              <v-col cols="6">
                {{metadata}}
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
import Picker from '@/components/Search/Picker';

import ExifReader from 'exifreader';

export default {
  name: 'upload-image',
  components: {
    Picker,
  },
  data: () => ({
    uploadDialog: false,
    valid: false,
    rules: [
      v => !!v || 'Fältet måste fyllas i',
    ],
    selectedTags: [],
    selectedPhotographers: [],
    image: null,
    metadata: {
      GPSLatitude: '',
      GPSLongitude: '',
      Model: '',
      ImageWidth: '',
      ImageHeight: '',
      DateTime: '',
    },
  }),
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'token',
      'tags',
      'photographers',
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
      let fr = new FileReader();
      fr.readAsArrayBuffer(this.image);
      fr.onload = () => {
        const tags = ExifReader.load(fr.result);
        console.log(tags);
        this.metadata.GPSLongitude = (typeof tags.GPSLongitude.description === 'undefined') ?  null : tags.GPSLongitude.description;
        // this.metadata.GPSLatitude ? tags.GPSLatitude.description : null;
        // this.metadata.Model ? tags.Model.description : null;
        // this.metadata.ImageHeight ? tags['Image Height'].value : null;
        // this.metadata.ImageWidth ? tags['Image Width'].value : null;
      };
    },
    uploadImage() {

    },
  },
};
</script>