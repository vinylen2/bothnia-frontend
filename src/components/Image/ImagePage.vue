<template>
  <v-card class="mx-auto pt-1" max-width="800">
    <v-img class="white--text align-end" :src="imageSrc">
      
    </v-img>

    <v-container>
      <v-card-title>{{info.name}}</v-card-title>
      <v-list>
        <v-list-item v-if="info.photographer.name !== null">
          <v-list-item-icon>
            <v-icon>mdi-camera</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Fotograf:
              <span class="subtitle-1">{{info.photographer.name}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="info.description !== null">
          <v-list-item-icon>
            <v-icon>mdi-pencil</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Beskrivning:
              <span class="subtitle-1">{{info.description}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

         <v-list-item v-if="info.location !== null">
          <v-list-item-icon>
            <v-icon>mdi-map-marker</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Plats
              <span class="subtitle-1">{{info.location}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="authorDate!== null">
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Skapad:
              <span class="subtitle-1">{{authorDate}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="info.cameraModel !== null">
          <v-list-item-icon>
            <v-icon>mdi-camera-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Kameramodell:
              <span class="subtitle-1">{{info.cameraModel}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="info.imageWidth !== null">
          <v-list-item-icon>
            <v-icon> mdi-arrow-split-vertical</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Bildbredd:
              <span class="subtitle-1">{{info.imageWidth}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="info.imageWidth !== null">
          <v-list-item-icon>
            <v-icon>mdi-arrow-split-horizontal</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Bildhöjd:
              <span class="subtitle-1">{{info.imageHeight}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="info.resolution !== null">
          <v-list-item-icon>
            <v-icon>mdi-quality-high</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Resolution:
              <span class="subtitle-1">{{info.resolution}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="info.gpsLongitude !== null">
          <v-list-item-icon>
            <v-icon>mdi-longitude</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Gps longitude
              <span class="subtitle-1">{{info.gpsLongitude}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
        <v-list-item v-if="info.gpsLongitude !== null">
          <v-list-item-icon>
            <v-icon>mdi-latitude</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Gps latitude
              <span class="subtitle-1">{{info.gpsLatitude}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="info.license !== null">
          <v-list-item-icon>
            <v-icon>mdi-license</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Licens:
              <span class="subtitle-1">{{info.license}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="info.usesLeft !== null">
          <v-list-item-icon>
            <v-icon>mdi-counter</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Användningar kvar:
              <span class="subtitle-1">{{info.usesLeft}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="info.captured !== null">
          <v-list-item-icon>
            <v-icon>mdi-calendar-month</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-medium">
              Tagen:
              <span class="subtitle-1">{{capturedDate}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn text target="_blank">Hämta</v-btn>
    </v-container>
 
  </v-card>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "image-page",

  computed: {
    imageSrc() {
      return `http://94.237.89.244:7777/files/${this.id}.jpg`;
    },
    authorDate() {
      return moment(this.info.created).format("YYYY-MM-DD");
    },
    capturedDate() {
      return moment(this.info.captured).format("YYYY-MM-DD");
    }
  },

  data() {
    return {
      id: this.$route.params.id,
      info: {},
      space: " ",
      location: " "
    }; 
  },




  mounted() {
    axios.get("http://94.237.89.244:7777/image/" + this.id).then(response => {
      this.info = response.data;
    });
  }
};
</script>