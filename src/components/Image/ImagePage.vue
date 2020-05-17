<template>
  <v-card class="mx-auto pt-1" max-width="600">
    <v-img class="white--text align-end" :src="imageSrc">
      <v-card-title>{{info.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"></v-card-subtitle>

    <v-card-text>
      <v-row v-if="info.photographer.name !== null">
        <div class="pr-1">Fotograf:</div>
        <div class="text--primary">{{info.photographer.name}}</div>
      </v-row>

      <v-row v-if="info.description !== null">
        <div class="pr-1">Beskrivning: {{space}}</div>
        <div class="text--primary">{{info.description}}</div>
      </v-row>
      <v-row v-if="authorDate!== null">
        <div class="pr-1">Skapad:</div>
        <div class="text--primary">{{authorDate}}</div>
      </v-row>
      <v-row v-if="info.gpsLongitude !== null">
        <div class="pr-1">Gps latitud:</div>
        <div class="text--primary">{{info.gpsLatitude}}</div>
      </v-row>
      <v-row v-if="info.gpsLongitude !== null">
        <div class="pr-1">Gps longitud :</div>
        <div class="text--primary">{{info.gpsLongitude}}</div>
      </v-row>
      <v-row v-if="info.cameraModel !== null">
        <div>Kameramodell:</div>
        <div class="text--primary">{{info.cameraModel}}</div>
      </v-row>
      <v-row v-if="info.imageWidth !== null">
        <div class="pr-1">Bildbredd:</div>
        <div class="text--primary">{{info.imageWidth}}</div>
      </v-row>
      <v-row v-if="info.gpsLongitude !== null">
        <div class="pr-1">Bildhöjd:</div>
        <div class="text--primary">{{info.imageHeight}}</div>
      </v-row>
      <v-row v-if="info.captured !== null">
        <div>Fångad:</div>
        <div class="text--primary">{{info.captured}}</div>
      </v-row>
      <v-row v-if="info.resolution !== null">
        <div class="pr-1">Resolution:</div>
        <div class="text--primary">{{info.resolution}}</div>
      </v-row>
      <v-row v-if="info.license !== null">
        <div class="pr-1">Licens:</div>
        <div class="text--primary">{{info.license}}</div>
      </v-row>
      <v-row v-if="info.usesLeft !== null">
        <div class="pr-1">Användningar kvar:</div>
        <div class="text--primary">{{info.usesLeft}}</div>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn color="teal lighten-1" text>Hämta</v-btn>
    </v-card-actions>
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
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      info: {},
      space: " "
    };
  },
  mounted() {
    axios.get("http://94.237.89.244:7777/image/" + this.id).then(response => {
      this.info = response.data;
    });
  }
};
</script>