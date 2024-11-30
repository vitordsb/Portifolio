<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <Transition name="fade" mode="out-in">
    <RouterView />
  </Transition>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
body {
  overflow: hidden;
}
a {
  text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 1s ease, opacity 1s ease;
}

.fade-enter-from {
  transform: translateX(20%);
  opacity: 0;
}

.fade-leave-to {
  transform: translateX(-20%);
  opacity: 0;
}
</style>
