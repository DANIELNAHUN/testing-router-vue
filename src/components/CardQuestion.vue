<template>
  <div class="container">
    <div class="card">
      <h2> ¿Que te ha parecido el curso? </h2><br>
      <span> Nos importa mucho tu opinion para seguir mejorando
        el contenido y experiencia de la plataforma</span>
        <div class="score-container">
          <div v-for="item in 5" :key="item">
            <button
            v-bind:class="{'is-selected': score.selected}"
            @click="scoreSelected(item)">{{item}}</button>
          </div>
        </div>
      <div class="actions">
        <button @click="sendScore">Enviar Respuesta</button>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
              score:{
                id: null,
                selected:false,
              },
              scoreList: []
            }
        },
        methods:{
          scoreSelected(id){
            const idSelected = id;
            const newscore = this.score.selected = !this.score.selected;
            const listValueSelected ={
              id: idSelected,
              state: newscore
            }
            this.scoreList.splice(idSelected, 1,listValueSelected);

            console.log(this.scoreList)
          },
          sendScore(){
            console.log(this.scoreList);
          }
        }
    }
</script>
<style>
.card{
  padding: 30px 25px;
  max-height: 600px;
  max-width: 350px;
  box-shadow: 5px 5px 1px #0E172C;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: #0E172C;
}
.card span{
  padding-bottom: 0%;
}
.container{
  display: flex;
  text-align: start;
}
.score-container{
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
}
.score-container button{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border-width: 2px;
  border-style: solid;
  border-color: #0E172C;
}
.score-container button:hover{
  background: #6923A3;
  color:aliceblue;
}
.actions{
  display: flex;
  justify-content: center;
  padding: 10px 0px;
}
.actions button{
  width:90%;
  height:50px;
  border-radius: 60px;
  background: #0E172C;
  color:aliceblue;
}
.is-selected{
  background: #0E172C;
  color:aliceblue;
}
</style>