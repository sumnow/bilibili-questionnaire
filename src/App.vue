<template>
  <div id="app" class="shadow">
    <router-view></router-view>
    <img src="./assets/bg.png" alt="" class="bg">
    <bottomtips></bottomtips>
  </div>
</template>

<script>

import bottomtips from '@/components/bottomtips'

export default {
  name: 'app',
  components: {
    bottomtips
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul{
  list-style: none;
}
#app {
  font-family: monaco;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app .bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width:100%;
  height:100%;
  z-index: -1;
  filter: blur(2px);
}

.shadow {
  background: rgba(0, 0, 0, .6);
}
</style>
