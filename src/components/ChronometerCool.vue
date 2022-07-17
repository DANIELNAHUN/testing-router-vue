<template>
  <div class="container-chronometer">
    <div v-if="pickerdate">
        <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="datePickerValue"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="datePickerValue"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </div>
    <div v-else-if="pickerhours">
        <v-time-picker
          v-model="time"
          type="month"
          width="290"
          class="ml-4"
        ></v-time-picker>
    </div>
    <div v-else>
        <div class="card-container">
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
    </div>
      <div>
        <v-btn  @click="startChronometer">Iniciar cronometro</v-btn>
      </div>

  </div>
</template>

<script>
import { format, set } from 'date-fns'
export default {
  data(){
    return{
      date: new Date(),
      menu: false,
      modal: false,
      menu2: false,
      hours:0,
      minutes:0,
      seg:0,
      timedata:"",
      pickerdate:false,
      pickerhours:false,
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
      this.hours = parseFloat(format(this.date,'HH'))
      this.minutes = parseFloat(format(this.date,'mm'))
      this.seg = parseFloat(format(this.date,'ss'))
    },
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
    font-size:13px;
    font-weight:bold;
    color:#dedede;
}
</style>