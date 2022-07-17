<template>
  <div>
    <ChronometerCool/>
  </div>
</template>

<script>
import ChronometerCool from '@/components/ChronometerCool.vue';
export default {
  components: {
    ChronometerCool,
  },
  created () {
    console.log(this.$route);
  },
}
</script>

<style>
html,body {
    height: 100%;
}
body {
    background: #0f3854;
    background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
    background-size: 100%;
}
</style>