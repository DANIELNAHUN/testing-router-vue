<template>
  <div class="container">
    <div class="card" v-if="cardStep">
      <h2>¿Que te ha parecido el curso?</h2>
      <br />
      <span>
        Nos importa mucho tu opinion para seguir mejorando el contenido y
        experiencia de la plataforma</span
      >
      <div class="score-container">
        <div v-for="(item, i) in scoreList" :key="i">
          <button
            v-bind:class="{ 'is-selected': item.selected }"
            @click="handleScoreItemClick(item)"
          >
            {{ i }}
          </button>
        </div>
      </div>
      <div class="actions">
        <button @click="changeStateCard()">Enviar Respuesta</button>
      </div>
    </div>
    <div class="card" v-else>
      <v-btn @click="changeStateCard" icon
        ><v-icon>mdi-keyboard-return</v-icon></v-btn
      >
      <v-img :src="scoreSelected.src"></v-img>
      <h2>Gracias por tu apoyo</h2>
      <br />
      <span>{{ scoreSelected.message }}</span>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardStep: true,
      scoreSelected: null,
      scoreList: [
        {
          id: 0,
          selected: false,
          src: require("../assets/sad.png"),
          message:
            "Lamentamos mucho que no te haya gustado el curso,seguiremos trabajando para mejorar.",
        },
        {
          id: 1,
          selected: false,
          src: require("../assets/please.png"),
          message:
            "Muchas gracias por darnos la oportunidad, nos esforzaremos para que la sgt sea mejor.",
        },
        {
          id: 2,
          selected: false,
          src: require("../assets/happy.png"),
          message:
            "Muchas gracias por valorar el curso, esperamos sigas apostando por nosotros.",
        },
        {
          id: 3,
          selected: false,
          src: require("../assets/good.png"),
          message:
            "Muchas gracias por la oportunidad, te esperamos en el siguiente curso.",
        },
        {
          id: 4,
          selected: false,
          src: require("../assets/verygood.png"),
          message:
            "Agradecemos por la valorizacion, nos vemos en el siguiente curso.",
        },
      ],
    };
  },
  methods: {
    handleScoreItemClick(scoreItem) {
      const idSelected = scoreItem.id;
      this.scoreSelected = scoreItem;
      this.scoreList.forEach((item, index) => {
        this.scoreList[index].selected = item.id === idSelected;
      });
    },
    changeStateCard() {
      this.cardStep = !this.cardStep;
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  padding: 30px 25px;
  max-height: 600px;
  max-width: 350px;
  box-shadow: 5px 5px 1px #0e172c;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: #0e172c;
}
.card span {
  padding-bottom: 0%;
}
.container {
  display: flex;
  text-align: start;
}
.score-container {
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
}
.score-container button {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border-width: 2px;
  border-style: solid;
  border-color: #0e172c;
}
.score-container button:hover {
  background: #6923a3;
  color: aliceblue;
}
.actions {
  display: flex;
  justify-content: center;
  padding: 10px 0px;
}
.actions button {
  width: 90%;
  height: 50px;
  border-radius: 60px;
  background: #0e172c;
  color: aliceblue;
}
.is-selected {
  background: #0e172c;
  color: aliceblue;
}
</style>