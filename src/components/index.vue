<template>
  <div class="center">
    <h1>{{ title }}</h1>
    <router-link :to="'/item'" class="asbutton">Start</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      title: this.$store.state.title
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.asbutton {
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: rgb(39, 104, 115) 0px 10px 14px -7px;
  background: linear-gradient(rgb(89, 155, 179) 5%, rgb(64, 140, 153) 100%) rgb(89, 155, 179);
  border-radius: 8px;
  height: 66px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-family: Arial;
  font-size: 20px;
  line-height: 40px;
  font-weight: bold;
  padding: 13px 32px;
  text-align: center;
  text-decoration: none;
  text-shadow: rgb(61, 118, 138) 0px 1px 0px;
  outline: none;
}

h1 {
  margin-top: 15vh;
  text-align: center;
  margin-bottom: 30vh;
  color:rgba(255, 255, 255, 0.7);

}

.center {
  position: absolute;
  width: 50vh;
  left: 50%;
  top: 50%;
  color: #fff;
  transform: translateX(-50%) translateY(-50%);
}
</style>
