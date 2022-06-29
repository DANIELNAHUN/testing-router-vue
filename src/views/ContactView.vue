<template>
  <div>
    Pagina Contacto
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

</style>