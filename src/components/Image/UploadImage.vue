<template>
<div>
  <v-btn text color="white" class="ma-0 pa-0"
    :hover="false"
    @click="uploadDialog = true">
    <v-icon>mdi-image-plus</v-icon>
  </v-btn>
  <v-dialog v-model="uploadDialog" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">
          Ladda upp bild
        </span>
        </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-container>
            <v-row>
              <v-col>
                <v-file-input
                  label="Välj bild"
                  filled
                  :rules="rules"
                  v-model="image"
                  accept=".jpg, .jpeg"
                  prepend-icon="mdi-camera">
                </v-file-input>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="Titel"
                  prepend-icon="mdi-format-title"
                  v-model="imageName"
                  :rules="rules">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="Beskrivning"
                  prepend-icon="mdi-pencil"
                  v-model="imageDescription"
                  :rules="rules">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="4">
                <v-text-field
                  label="Bredd"
                  disabled
                  prepend-icon="mdi-arrow-split-vertical"
                  v-model="metadata.ImageWidth">

                </v-text-field>
              </v-col>
              <v-col md="4">
                <v-text-field
                  label="Höjd"
                  disabled
                  prepend-icon="mdi-arrow-split-horizontal"
                  v-model="metadata.ImageHeight">

                </v-text-field>
              </v-col>
              <v-col md="4">
                <v-text-field
                  label="Modell"
                  prepend-icon="mdi-camera-plus"
                  v-model="metadata.Model">

                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" md="6">
                <v-text-field
                  v-model="location"
                  prepend-icon="mdi-map-marker"
                  label="Plats">

                </v-text-field>
              </v-col>
              <v-col cols="6" md="6">
                <v-menu ref="menu"
                  v-model="dateModal">
                    <template v-slot:activator="{ on }">
                      <v-combobox
                        v-model="metadata.DateTime"
                        chips
                        :rules="rules"
                        deletable-chips
                        prepend-icon="mdi-calendar"
                        label="Datum"
                        v-on="on"
                      ></v-combobox>
                    </template>
                    <v-date-picker v-model="metadata.DateTime"></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <Picker 
                  :publish="uploadPress"
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
                  :publish="uploadPress"
                  :label="'Fotograf'"
                  :items="photographers"
                  :add="validate"
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
import axios from 'axios';
import moment from 'moment';
import Picker from '@/components/Search/Picker';

import ExifReader from 'exifreader';

export default {
  name: 'upload-image',
  components: {
    Picker,
  },
  data: () => ({
    dateModal: false,
    uploadPress: false,
    uploadDialog: false,
    valid: false,
    validate: false,
    rules: [
      v => !!v || 'Fältet måste fyllas i',
    ],
    image: null,
    imageDescription: null,
    imageName: '',
    location: null,
    metadata: {
      GPSLatitude: null,
      GPSLongitude: null,
      Model: null,
      ImageWidth: null,
      ImageHeight: null,
      DateTime: null,
    },
  }),
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'token',
      'tags',
      'photographers',
      'selectedPhotographers',
      'selectedTags',
    ]),
    formattedSelectedTags() {
      if (this.selectedTags) {
        return this.selectedTags.split(';');
      } return null;
    },
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
    formattedGps(data) {
      return data ? data.toString() : null;
    },
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
        if (this.metadata.GPSLatitude && this.metadata.GPSLongitude) {
          this.getLocation();
        }
      };
    },
    getLocation() {
      let api = axios.create({
        baseURL: 'https://api.opencagedata.com/geocode/v1/',
      });

      api.get(`json?key=93a9ae286a274a9598da43871615df2a&q=${this.metadata.GPSLatitude},${this.metadata.GPSLongitude}`)
        .then((result) => {
          if (result.data.results.length > 0) {
            this.location = `${result.data.results[0].components.country}, ${result.data.results[0].components.county}`
          }
        });
    },
    uploadImage() {
      this.validate = true;
      if (this.$refs.form.validate()) {
        this.uploadPress = true;
        let date = moment(this.metadata.DateTime).format();
        setTimeout(() => {
          this.$store.dispatch('postImage', {
            name: this.imageName,
            description: this.imageDescription,
            captured: date,
            location: this.location,
            gpsLatitude: this.formattedGps(this.metadata.GPSLatitude),
            gpsLongitude: this.formattedGps(this.metadata.GPSLongitude),
            cameraModel: this.metadata.Model,
            imageWidth: this.formattedGps(this.metadata.ImageWidth),
            imageHeight: this.formattedGps(this.metadata.ImageHeight),
            tags: this.formattedSelectedTags,
            photographer: {id: this.selectedPhotographers},
          })
            .then((result) => {
              this.uploadPress = false;
              this.validate = false;
              this.uploadImageData(result.id);
            }, error => {
              this.uploadPress = false;
              this.validate = false;
              this.$store.commit('errorSnackbar', 'Det gick inte att ladda upp bilden.');
            });
          }, 100);
      }
    },
    uploadImageData(id) {
      let formData = new FormData();
      formData.append('file', this.image)
      this.$store.dispatch('uploadImage', {formData: formData, id})
        .then((result) => {
          this.$store.commit('successSnackbar', 'Din bild är nu uppladdad!');
          this.uploadDialog = false;
        }, error => {
          console.log(error);
        });
    },
  },
};
</script>