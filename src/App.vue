<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <container>
        <div class="d-flex justify-center py-3"><CardQuestion/></div>
      </container>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import CardQuestion from './components/CardQuestion';

export default {
  name: 'App',

  components: {
    CardQuestion,
  },

  data: () => ({
    //
  }),
};
</script>
