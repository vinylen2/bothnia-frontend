<template>
<div>
  <v-row class="pl-8">
    <v-col cols="10" align="center" class="pa-0">
      <v-btn text @click="post">
        <span>Lägg till {{searchInput}}</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['type', 'searchInput'],
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
          this.$store.dispatch('postTag', this.searchInput)
            .then((response) => {
              this.$emit('addedItem', response.id);
            }, error => {
              console.log(error);
            });
          break;
        case 'photographer':
          this.$store.dispatch('postPhotographer', this.searchInput)
            .then((response) => {
              this.$emit('addedItem', response.id);
            }, error => {
              console.log(error);
            });
          break;
      }
    },
  },
};
</script>