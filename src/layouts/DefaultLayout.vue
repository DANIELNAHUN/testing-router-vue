<template>
  <div class="layout-container">
    <div class="router-container">
      <div class="header-container">
        <v-btn @click ="toggleState" icon><v-icon>mdi-format-list-bulleted-square</v-icon></v-btn>
        <h2>Testing Vue Router</h2>
      </div>
      <div v-if="active" class ="link-container">
      <router-link to="/">Unsplash Gallery</router-link> |
      <router-link to="/cardquestion">CardQuestion</router-link> |
      <router-link to="/chronometer">Chronometer</router-link>
      </div>
    </div>
    <div class="component-container">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true
    }
  },
  methods: {
    toggleState() {
      this.active=!this.active
      console.log(this.active)
    }
  },
};
</script>

<style lang="scss" scoped>
.layout-container{
  display: flex;
  flex-direction: column;
}
.router-container{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70px;
  background: #6a75ab;
  color: #fff;
}
.header-container{
  display: flex;
  flex-direction: row;
}
.link-container{
  display: flex;
  justify-content:center;
  gap: 70px;
  align-items: center;
  padding: 5px 5px;
  background: #6a75ab;
  max-width: 100%;
}
.link-container a {
  color:#fff;
  text-decoration: none;
}
.component-container{
  padding: 25px;
}
</style>