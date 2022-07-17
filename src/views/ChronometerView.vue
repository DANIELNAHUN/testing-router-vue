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
.container{
  display: flex;
  justify-content: center;
}

</style>