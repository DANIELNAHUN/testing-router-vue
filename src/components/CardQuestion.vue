<template>
  <div class="d-flex">
    <v-card outlined-color="blue"
    max-width="400px"
    max-height="300px">
      <div class="text-h6 text-center font-weight-bold"> ¿Que te ha parecido el curso? </div>
      <v-card-text> Nos importa mucho tu opinion para seguir mejorando
        el contenido y experiencia de la plataforma
        <v-row no-gutters>
          <v-col><v-btn fab  class="btn-score">1</v-btn></v-col>
          <v-col><v-btn fab class="btn-score">2</v-btn></v-col>
          <v-col><v-btn fab class="btn-score">3</v-btn></v-col>
          <v-col><v-btn fab class="btn-score">4</v-btn></v-col>
          <v-col><v-btn fab class="btn-score">5</v-btn></v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#0F172D" class=" button white--text" rounded>Enviar Respuesta</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
    }
</script>
<style scoped>
.v-card {
  align-content: center;
}
.btn-score{
  border: 2cm;
  border-color: blue;
  background: white;
}
</style>