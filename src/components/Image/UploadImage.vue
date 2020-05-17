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
              <v-col>
                <v-text-field
                  label="Titel"
                  v-model="imageName"
                  :rules="rules">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="Beskrivning"
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
                  v-model="metadata.ImageWidth"
                  :rules="rules">

                </v-text-field>
              </v-col>
              <v-col md="4">
                <v-text-field
                  label="Höjd"
                  disabled
                  v-model="metadata.ImageHeight"
                  :rules="rules">

                </v-text-field>
              </v-col>
              <v-col md="4">
                <v-text-field
                  label="Modell"
                  v-model="metadata.Model">

                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" md="6">
                <v-text-field
                  v-model="location"
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
    uploadDialog: true,
    valid: false,
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
      this.uploadPress = true;
      let date = moment(this.metadata.DateTime).format();
      setTimeout(() => {
        this.$store.dispatch('postImage', {
          name: this.imageName,
          description: this.imageDescription,
          captured: date,
          gpsLatitude: this.metadata.GPSLatitude.toString(),
          gpsLongitude: this.metadata.GPSLongitude.toString(),
          cameraModel: this.metadata.Model,
          imageWidth: this.imageWidth,
          imageHeight: this.imageHeight,
          tags: this.formattedSelectedTags,
          photographer: {id: this.selectedPhotographers},
        })
          .then((result) => {
            this.uploadImageData(result.id);
          }, error => {
            this.$store.commit('errorSnackbar', 'Det gick inte att ladda upp bilden.');
          });
        }, 100);
    },
    uploadImageData(id) {
      let formData = new FormData();
      formData.append('file', this.image)
      this.$store.dispatch('uploadImage', {formData: formData, id})
        .then((result) => {
          this.$store.commit('successSnackbar', 'Din bild är nu uppladdad!');
        }, error => {
          console.log(error);
        });
    },
  },
};
</script>