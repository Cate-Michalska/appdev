<template>
  <AppHeader />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'; 

export default {
  components: { AppHeader }, 
}; 
</script>