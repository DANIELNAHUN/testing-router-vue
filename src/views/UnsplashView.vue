<template>
  <div data-app class="container">
    <h1>Unsplash</h1><br>
    <p>La fuente de Internet de imágenes de uso libre.</p>
    <p>Con recursos de creadores de todo el mundo.</p><br>
    <v-text-field v-model="searchQuery" label="Search from Unsplash"></v-text-field>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select v-model="colorSelected" :items="colors" label="Colors"></v-select>
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <v-btn   dark @click="getSearchedImages" depressed >Search</v-btn>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row>
      <v-col
        v-for="(image, index) in unplashImage"
        :key="index"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="image.urls.regular"
          :lazy-src="image.urls.regular"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from "axios";
const UNPLASH_BASE_URL = "https://api.unsplash.com/";
const UNPLASH_ACCES_KEY = "sFP_BSCYccd3l2seQJVlRuN_TRayKVDKPaaFDG-y3Ig";
export default {
  components: {},
  data() {
    return {
      searchQuery: "",
      unplashImage: [],
      colorSelected: "",
      colors: [
        "black_and_white",
        "black",
        "white",
        "yellow",
        "orange",
        "red",
        "purple",
        "magenta",
        "green",
        "teal",
        "blue",
      ],
    };
  },
  created() {},
  methods: {
    getSearchedImages() {
      const params = {
        query: this.searchQuery,
        color: this.colorSelected,
        client_id: UNPLASH_ACCES_KEY,
      };
      axios
        .get(`${UNPLASH_BASE_URL}/search/photos`, { params })
        .then((response) => {
          // handle success
          console.log(response.data.results);
          this.unplashImage = response.data.results;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 65%;
}
</style>