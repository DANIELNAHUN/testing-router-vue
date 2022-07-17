<template>
  <div class="container-chronometer">
    <div class = "pickerdate-container">
        <input type="number" class="input-date" placeholder="year" min="1" max="9999" maxlength="4"
        oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)"
        v-model="pickerYear">/
        <input type="number" class="input-date" placeholder="month" min="1" max="12" maxlength="2"
        oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)"
        v-model="pickerMonth">/
        <input type="number" class="input-date" placeholder="day" min="1" max="31" maxlength="2"
        oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)"
        v-model="pickerDay"> ---
        <input type="number" class="input-date" placeholder="hour" min="1" max="23" maxlength="2"
        oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)"
        v-model="pickerHour">:
        <input type="number" class="input-date" placeholder="minutes" min="1" max="59" maxlength="2"
        oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)"
        v-model="pickerMin">
    </div>
    <div>
      <v-btn  @click="startChronometer">Iniciar cronometro</v-btn>
    </div>
      <div class="card-container">
        <div class="card">
          <div class="days">{{day}}</div>
          <p>Days</p>
        </div>
        <div class="card">
          <div v-if="hours >=10">{{hours}}</div>
          <div v-else class="hours">0{{hours}}</div>
          <p>Hours</p>
        </div>
        <div class="card">
          <div v-if="minutes>=10">{{minutes}}</div>
          <div v-else class="minutes">0{{minutes}}</div>
          <p>Minutes</p>
        </div>
        <div class="card">
          <div v-if="seg>=10">{{seg}}</div>
          <div v-else class="seg">0{{seg}}</div>
          <p>Seconds</p>
        </div>
      </div>
  </div>
</template>

<script>
import { format, set } from 'date-fns'
export default {
  data(){
    return{
      date: new Date(),
      pickerYear:null,
      pickerMonth:null,
      pickerDay:null,
      pickerHour:null,
      pickerMin:null,
      day:0,
      hours:0,
      minutes:0,
      seg:0,
    }
  },
  computed: {
    datePickerValue: {
      get () {
        return format(this.date, 'yyyy-MM-dd')
      },
      set (value) {
        const [year, month, date] = value.split('-')
        this.date = set(this.date, { year, month: month - 1, date })
      },
    },
    total(){
      return this.hours + this.minutes
    }
  },
  mounted() {
      setInterval(this.loadSec,1000)
    },
  methods:{
    startChronometer(){
      var msegMinuto = 1000 * 60;
      var msegHora = msegMinuto * 60;
      var msegDia = msegHora * 24;
      var hoy = new Date()

      var dateCr = new Date(this.pickerYear,this.pickerMonth-1,this.pickerDay, this.pickerHour, this.pickerMin,0)
      var tiempo = dateCr - hoy
      var days = Math.floor(tiempo/ msegDia)
      tiempo = tiempo - (days * msegDia)
      var horas = Math.floor(tiempo / msegHora)
      tiempo = tiempo - (horas * msegHora)

      var minutos = Math.floor(tiempo /msegMinuto)
      tiempo = tiempo - (minutos * msegMinuto)

      this.day = days
      this.hours = horas
      this.minutes = minutos
    },
    //Seconds
    loadSec(){
      if(this.seg<=0){
        this.seg =60;
      }
      this.seg--
      this.loadMinutes(this.seg)
    },
    //Minutes
    loadMinutes(seg){
      if(seg == 0 && this.minutes!=0){
        setTimeout(() => this.minutes--,500)
      }
      else if(seg == 0 && this.minutes==0){
        setTimeout(() => this.minutes=0,500)
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
            this.hours=0},500)
    }
    this.loadDays(seg,min,this.hours)
    },
    loadDays(seg,min,hour){
      if(seg == 0 && min ==0 && hour==0 && this.day!==0){
        setTimeout(()=>{
            this.day--},500)
    }else if(seg == 0 && min ==0 && hour==0 && this.day==0){
        setTimeout(()=>{
            this.day=0},500)
    }
    }
  },
}
</script>

<style>
*{
  margin: 0; padding: 0;
}
.container-chronometer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: 100%;
  height: 100%;
  width: 100%;
}
.card-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 0px;
  font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);

}
.pick-hours{
  display: flex;
  flex-direction: row;
  text-align: center;
}
.container-chronometer .card-container .card{
  margin:0px 4px;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.container-chronometer .card-container .card div{
  display:flex;
  justify-content:center;
  align-items:center;
  color:#ffffff;
  background-color: rgb(0, 0, 0);
  box-shadow:0px 0px 6px 2px#727272 inset;
  font-size:40px;
  font-weight:bold;
  width:100px;
  height:70px;
  margin-bottom:10px;
  border-radius:5px;
}
.container-chronometer .card-container .card p{
    font-size:15px;
    font-weight:bold;
    color:#0f3854;
}
.pickerdate-container{
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  padding: 50px;
  row-gap: 20px;
  color: #6d6868;
  font-size: 1rem;
}
.input-date{
  text-align: center;
  max-width: 80px;
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1rem;
  color: #1a0116;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
</style>