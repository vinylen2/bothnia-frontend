<template>
<v-content class="pa-0">
  <v-row justify="center">
    <v-col align="center" class="headline">
      <span>Startsida</span>
    </v-col>
    <UploadImage 
      @closeDialog="closeDialog"/>
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
  }),
  methods: {
    closeDialog(data) {
      if (data) {
        // stuff was uploaded
      } else {
        // stuff was not uploaded
      }
    },
  },
};
</script>
