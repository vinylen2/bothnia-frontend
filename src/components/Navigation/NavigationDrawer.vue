<template>
<v-card>
  <v-navigation-drawer v-model="drawer" temporary
    app>
    <v-list dense>
      <v-list-item>
        <v-list-item-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-content>
            Hem
          </v-list-item-content>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'drawer',
    ]),
  },
};
</script>
