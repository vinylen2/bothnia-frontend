<template>
   <v-btn icon v-if="image.imageid"
                    :to="{ name: 'images', params: 
                      { 
                        genre: { 
                          id: image.imageid,
                          slug: image.imageslug,
                        } 
                      }
                    }"
                    width="auto" height="auto" class="ma-2"
                    >
</template>

<script>
export default {

}
</script>

<style>

</style>
