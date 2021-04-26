<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <QuickChat />
</template>

<script>
import QuickChat from './components/QuickChat.vue'

export default {
  name: 'App',
  components: {
    QuickChat
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
