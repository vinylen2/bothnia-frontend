<template>
  <v-content class="pt-0">
    <SearchBar />
    <v-row class="ma-2">
      <v-col cols="12" md="6" lg="4"
        v-for="image in images" 
        :key="image.id">
        <ImageCard 
          :image="image"
        />
      </v-col>
    </v-row>
    <UploadImage @closeDialog="closeDialog"/>
  </v-content>
</template>

<script>
import SearchBar from '@/components/Search/SearchBar';
import UploadImage from '@/components/Image/UploadImage';
import ImageCard from '@/components/Image/ImageCard';

export default {
  components: {
    SearchBar,
    UploadImage,
    ImageCard,
  },
  data: () => ({
    images: [
      {
        id: 0,
        name: 'Liggande älg',
        photographer: 'Hans Eriksson',
        date: '2020-05-10',
        imagePath: 'https://zoogalaktika.ru/assets/images/mammalia/artiodactyla/ruminantia/cervidae/alces-alces/alces-alces_13.jpg',
      },
      {
        id: 1,
        name: 'Liggande älg',
        photographer: 'Hans Eriksson',
        date: '2020-05-10',
        imagePath: 'https://zoogalaktika.ru/assets/images/mammalia/artiodactyla/ruminantia/cervidae/alces-alces/alces-alces_13.jpg',
      },
      {
        id: 2,
        name: 'Liggande älg',
        photographer: 'Hans Eriksson',
        date: '2020-05-10',
        imagePath: 'https://zoogalaktika.ru/assets/images/mammalia/artiodactyla/ruminantia/cervidae/alces-alces/alces-alces_13.jpg',
      },
    ],
  }),
};
</script>