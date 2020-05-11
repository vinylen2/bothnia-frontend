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
          <v-text-field
            v-model="data"
            :rules="rules"
            :label="'Skriv in ' + title"
            required
          ></v-text-field>
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
    data: '',
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
          this.$store.dispatch('postTag', this.data);
          break;
        case 'photographer':
          this.$store.dispatch('postPhotographer', this.data);
          break;
      }
    },
  },
};
</script>