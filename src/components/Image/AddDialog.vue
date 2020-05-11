<template>
<div>
  <v-icon @click="addDialog = true">
    mdi-plus
  </v-icon>
  <v-dialog v-model="addDialog">
    <v-card >
      <v-card-title>
        <span class="heading">
          Lägg till {{title}}
        </span>
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          lazy-validation
          @submit.prevent="post"
        >
        <div v-if="type === 'tag'">
          <v-text-field
            v-model="data"
            :rules="rules"
            :label="'Skriv in ' + title"
            required
          ></v-text-field>
        </div>
        <div v-if="type === 'photographer'">
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="photographer.fName"
                :rules="rules"
                label="Förnamn"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="photographer.lName"
                :rules="rules"
                label="Efternamn"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="photographer.email"
                :rules="rules"
                label="Epost"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="photographer.phone"
                :rules="rules"
                label="Telefon"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
          <v-btn
            submit
            color="teal lighten-2"
            class="mr-4"
            type="submit"
          >
          Lägg till
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['type'],
  data: () => ({
    addDialog: false,
    tag: '',
    photographer: {
      fName: '',
      lName: '',
      email: '',
      phone: '',
    },
    rules: [
      v => !!v || 'Fältet måste fyllas i',
    ],
  }),
  computed: {
    title() {
      switch (this.type) {
        case 'tag':
          return 'tagg';
        case 'photographer':
          return 'fotograf';
        default: 
          return 'Undefined';
      }
    },
    ...mapActions([
      'postTag',
      'postPhotographer',
    ])
  },
  methods: {
    post() {
      switch (this.type) {
        case 'tag':
          this.$store.dispatch('postTag', this.tag);
          break;
        case 'photographer':
          this.$store.dispatch('postPhotographer', this.photographer);
          break;
      }
    },
  },
};
</script>