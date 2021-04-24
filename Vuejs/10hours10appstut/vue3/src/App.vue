<template>
  <AppHeader />
  <div class="w-full flex">
    <DcHeros />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'; 
import DcHeros from './components/DcHeros.vue'; 

export default {
  components: { AppHeader, DcHeros }, 
}; 
</script>