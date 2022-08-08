<template>
  <div>
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <router-link to="/">Unsplash</router-link> |
      <router-link to="/cardquestion">CardQuestion</router-link> |
      <router-link to="/chronometer">Chronometer</router-link>
    </v-app-bar>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>