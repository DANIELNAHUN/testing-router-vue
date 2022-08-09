<template>
  <div>
    <div class="router-container">
      <v-btn><v-icon>mdi-format-list-bulleted-square</v-icon></v-btn>
      <h2>Testing Vue Router</h2>
      <div class ="link-container">
      <router-link to="/">Unsplash</router-link> |
      <router-link to="/cardquestion">CardQuestion</router-link> |
      <router-link to="/chronometer">Chronometer</router-link>
      </div>      
    </div>      
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.router-container{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  background: #6a75ab;
}
.link-container{
  display: flex;
  justify-content:space-evenly;
  align-items: center;
}
</style>