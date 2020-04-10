<template>
  <v-content></v-content>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getExample');
  },
};
</script>