<template>
<v-content class="pa-0">
  <v-row justify="center">
    <v-col align="center" class="headline">
      <span>Startsida</span>
    </v-col>
    <v-btn
      @click="uploadDialog = true"
      bottom
      right
      fixed
      fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="uploadDialog" persistent>
      <UploadImage 
        @closeDialog="closeDialog"/>
    </v-dialog>
  </v-row>
</v-content>
</template>

<script>
import UploadImage from '@/components/Image/UploadImage';

export default {
  name: 'upload-image',
  components: {
    UploadImage,
  },
  data: () => ({
    uploadDialog: false,
  }),
  methods: {
    closeDialog(data) {
      if (data) {
        // stuff was uploaded
      } else {
        // stuff was not uploaded
      }
      this.uploadDialog = false;
    },

  },
};
</script>
