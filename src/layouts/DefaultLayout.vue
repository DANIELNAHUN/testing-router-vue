<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">CardQuestion</router-link>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>