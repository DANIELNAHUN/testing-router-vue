<template>
  <div class="container">
    <div class="card" v-if="cardState">
      <h2> ¿Que te ha parecido el curso? </h2><br>
      <span> Nos importa mucho tu opinion para seguir mejorando
        el contenido y experiencia de la plataforma</span>
        <div class="score-container">
          <div v-for="(item,i) in scoreList" :key="i">
            <button
            v-bind:class="{'is-selected': scoreList[i].selected}"
            @click="scoreSelected(i)">{{i}}</button>
          </div>
        </div>
      <div class="actions">
        <button @click="sendScore()">Enviar Respuesta</button>
      </div>
    </div>
    <div class="card" v-else>
      <v-btn @click="changeStateCard" icon><v-icon >mdi-keyboard-return</v-icon></v-btn>
      <v-img :src="require('../assets/happy.png')"></v-img>
      <h2>Gracias por tu apoyo</h2>
      <span>Trataremos de seguir mejorando</span><br>
      <span>{{messageFinal}}</span>
    </div>
    <div>

    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
              cardState:true,
              messageFinal:"",
              srcImage:"",
              scoreList: [
                {id:0,selected:false},
                {id:1,selected:false},
                {id:2,selected:false},
                {id:3,selected:false},
                {id:4,selected:false}
                ],
              messageList:[
                {id:0,mensaje:"Tienes 0", src:"../assets/sad.png"},
                {id:1,mensaje:"Tienes 1", src:"../assets/please.png"},
                {id:2,mensaje:"Tienes 2", src:"../assets/happy.png"},
                {id:3,mensaje:"Tienes 3", src:"../assets/good.png"},
                {id:4,mensaje:"Tienes 4", src:"../assets/verygood.png"},
              ]
            }
        },
        methods:{
          scoreSelected(id){
            const idSelected = id
            const newScore = !this.scoreList[idSelected].selected
            const newListScore={
              id:idSelected,
              selected:newScore
            }
            this.deleteSelectedScore()
            this.scoreList.splice(idSelected,1,newListScore)
            //console.log(this.scoreList[idSelected].id)
          },
          deleteSelectedScore(){
            for (var i = 0; i < this.scoreList.length; i++) {
              const newListBlankScore={
                id:i,
                selected:false
              }
              this.scoreList.splice(i,1,newListBlankScore)
            }
          },
          sendScore(){
            var score = ""
            for (var i = 0; i < this.scoreList.length; i++) {
              if(this.scoreList[i].selected==true){
                score = this.scoreList[i].id
              }
            }
            this.messageFinal = this.messageList[score].mensaje
            var imagesrc = this.srcImage = this.messageList[score].src
            //var image = document.getElementById('scoreImg');
           // image.src= imagesrc
            this.changeStateCard()
            console.log(imagesrc);
          },
          changeStateCard(){
            this.cardState = !this.cardState
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