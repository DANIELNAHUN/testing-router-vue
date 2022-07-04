<template>
  <div class="con-temp">
    <div class="card">
      <div class="days">00</div>
      <p>Days</p>
    </div>
    <div class="card">
      <div v-if="hours >=10" class="hours">{{hours}}</div>
      <div v-else class="hours">0{{hours}}</div>
      <p>Hours</p>
    </div>
    <div class="card">
      <div v-if="minutes>=10" class="minutes">{{minutes}}</div>
      <div v-else class="minutes">0{{minutes}}</div>
      <p>Minutes</p>
    </div>
    <div class="card">
      <div v-if="seg>=10" class="seg">{{seg}}</div>
      <div v-else class="seg">0{{seg}}</div>
      <p>Seconds</p>
    </div>

  </div>
</template>

<script>

export default {
  data(){
    return{
      hours:2,
      minutes:1,
      seg:11,
      timedata:"",
    }
  },
  methods:{
    //Seconds
    loadSec(){
      if(this.seg<=0){
        this.seg =60;
      }
      this.seg--
      this.loadMinutes(this.seg)
      //this.timedata = new Date().toLocaleTimeString();
    },
    //Minutes
    loadMinutes(seg){
      if(seg == 0 && this.minutes!=0){
        setTimeout(() => this.minutes--,500)
      }
      else if(seg == 0 && this.minutes==0){
        setTimeout(() => this.minutes=59,500)
      }
      this.loadHoras(seg,this.minutes)
    },
    //Hours
    loadHoras(seg,min){
    if(seg == 0 && min ==0 && this.hours!==0){
        setTimeout(()=>{
            this.hours--},500)
    }else if(seg == 0 && min ==0 && this.hours==0){
        setTimeout(()=>{
            this.hours=2},500)
    }
    }
  },
mounted() {
      setInterval(this.loadSec,1000)
    },

}
</script>

<style>
*{
  margin: 0; padding: 0;
}
body {
  background: url(../assets/bgcron.png) no-repeat center center fixed;
}
.con-temp {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.con-temp .card {
  margin:0px 4px;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.con-temp .card div{
  display:flex;
  justify-content:center;
  align-items:center;
  color:#ffffff;
  background-color: rgb(80, 80, 80);
  box-shadow:0px 0px 6px 2px#727272 inset;
  font-size:40px;
  font-weight:bold;
  width:100px;
  height:70px;
  margin-bottom:10px;
  border-radius:5px;
}
.con-temp .card p{
    font-size:13px;
    font-weight:bold;
    color:#dedede;
}
</style>