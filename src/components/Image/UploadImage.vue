<template>
<div>
  <v-btn text color="white" class="ma-0 pa-0"
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

              </v-col>
            </v-row>
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
              <v-col cols="6" md="4">
                <v-text-field
                  label="Bredd"
                  disabled
                  v-model="metadata.ImageWidth"
                  :rules="rules">

                </v-text-field>
              </v-col>
              <v-col cols="6" md="4">
                <v-text-field
                  label="Höjd"
                  disabled
                  v-model="metadata.ImageHeight"
                  :rules="rules">

                </v-text-field>
              </v-col>
              <v-col cols="6" md="4">
                <v-text-field
                  label="Modell"
                  v-model="metadata.Model">

                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" md="6">
                <v-text-field
                  label="Plats">

                </v-text-field>
              </v-col>
              <v-col cols="6" md="6">
                <v-text-field
                  label="Datum för foto"
                  :rules="rules">

                </v-text-field>
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
                  :type="'tag'"
                  :append="true"
                  :multiple="true"
                />
              </v-col>
              <v-col cols="6">
                <Picker 
                  :label="'Fotograf'"
                  :items="photographers"
                  :selectedArray="selectedPhotographers"
                  :itemTextProp="'name'"
                  :hint="'Välj fotograf'"
                  :type="'photographer'"
                  :append="true"
                  :multiple="false"
                />
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
    base64: null,
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
        this.convertToString();
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
    checkContent(data) {
      if (typeof data === 'undefined') {
        return false
      } return true
    },
    convertToString() {
      let fr = new FileReader();
      fr.readAsDataURL(this.image);
      fr.onload = () => {
        this.base64 = fr.result.replace('data:image/jpeg;base64,', '');
      };
    },
    extractMetaData() {
      let fr = new FileReader();
      fr.readAsArrayBuffer(this.image);
      fr.onload = () => {
        const tags = ExifReader.load(fr.result);
        this.metadata.GPSLongitude = this.checkContent(tags.GPSLongitude) ? tags.GPSLongitude.description : null;
        this.metadata.GPSLatitude = this.checkContent(tags.GPSLatitude) ? tags.GPSLatitude.description : null;
        this.metadata.Model = this.checkContent(tags.Model) ? tags.Model.description : null;
        this.metadata.ImageHeight = this.checkContent(tags['Image Height']) ? tags['Image Height'].value : null;
        this.metadata.ImageWidth = this.checkContent(tags['Image Width']) ? tags['Image Width'].value : null;
      };
    },
    uploadImage() {
      this.$store.dispatch('postImage', {name: 'test', base64: this.base64})
        .then((result) => {
          console.log(result);

        }, error => {
          console.log(error);

        });

    },
  },
};
</script>