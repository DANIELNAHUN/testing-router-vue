<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/unsplash">Unsplash</router-link> |
      <router-link to="/cardquestion">CardQuestion</router-link> |
      <router-link to="/chronometer">Chronometer</router-link>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>