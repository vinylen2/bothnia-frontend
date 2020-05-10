<template>
<v-card>
  <v-card-title>
    <span class="heading">
      Logga in
    </span>
  </v-card-title>
  <v-card-text>
    <v-form
      ref="form"
      lazy-validation
      @submit.prevent="login"
    >
      <v-text-field
        v-model="username"
        :rules="rules"
        prepend-icon="mdi-account"
        label="Användarnamn"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="rules"
        prepend-icon="mdi-lock"
        type='password'
        label="Lösenord"
        required
      ></v-text-field>
      <v-btn
        submit
        color="teal lighten-2"
        class="mr-4"
        type="submit"
      >
      logga in
      </v-btn>
    </v-form>
  </v-card-text>
</v-card>
</template>

<script>
  /* eslint-disable no-console */
export default {
  name: 'admin-login',
  data: () => ({
    username: '',
    password: '',
    rules: [
      v => !!v || 'fältet måste fyllas i',
    ],
  }),
  methods: {
    login() {
      this.$store.dispatch('auth', {username: this.username, password: this.password})
    },
  },
};
</script>
