<template>
  <div class="container">
    <CardQuestion/>
  </div>
</template>

<script>
import CardQuestion from '@/components/CardQuestion.vue';
export default {
  components: {
    CardQuestion,
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
  height: 100%;
  width: 100%;
}
</style>