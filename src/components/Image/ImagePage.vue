<template>
  <v-card class="mx-auto pt-1" max-width="600">
    <v-img class="white--text align-end" :src="imageSrc">
      <v-card-title>{{info.name}}</v-card-title>
    </v-img>

    <v-container>
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
              Beskrivning
              <span class="subtitle-1">{{info.description}}</span>
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
            <v-icon>mdi-arrow-split-horizontal</v-icon>
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
            <v-icon>mdi-arrow-split-vertical</v-icon>
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

        <!-- <v-list-item v-if="info.imageWidth !== null"> 
              <v-list-item-icon>
                <v-icon >mdi-camera</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="font-weight-medium">
            Bildbredd:
                   <span class="subtitle-1">
              {{info.imageWidth}}
                  </span>
                </v-list-item-title>
              </v-list-item-content>
        </v-list-item>-->

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
    </v-container>

    <!-- <v-card-subtitle class="pb-0"></v-card-subtitle>

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
      <v-row>
          <div class="pr-1">Plats:</div>
    <div class="text--primary">{{authorDate}}</div>-->

    <!-- asdasd -->

    <!-- </v-row>
      <v-row v-if="info.cameraModel !== null">
        <div class="pr-1" prepend-icon="mdi-format-title" > Kameramodell:</div>
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
        <div class="pr-1">Fångad:</div>
        <div class="text--primary">{{capturedDate}}</div>
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
    </v-card-text>-->

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
  // methods() {

  //    getLocation() {
  //     let api = axios.create({
  //       baseURL: 'https://api.opencagedata.com/geocode/v1/',
  //     });
  //     api.get(`json?key=93a9ae286a274a9598da43871615df2a&q=${this.info.GPSLatitude},${this.info.GPSLongitude}`)
  //       .then((result) => {
  //         if (result.data.results.length > 0) {
  //           this.location = `${result.data.results[0].components.country}, ${result.data.results[0].components.county}`
  //           // något fel med location
  //         }
  //       });
  //         }
  // },

  mounted() {
    axios.get("http://94.237.89.244:7777/image/" + this.id).then(response => {
      this.info = response.data;
    });
  }
};
</script>