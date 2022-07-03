<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  components: {

  },
  created () {
    axios.get('https://pokeapi.co/api/v2/pokemon-species/aegislash')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  },
}
</script>