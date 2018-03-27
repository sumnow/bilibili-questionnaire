<template lang="html">
  <div class="tips">
    <marquee>
      {{ gettips() }}
    </marquee>
    <ul class="bar">
      <li v-for="(v,i) in questionslength" v-bind:class="{red: getscore()[i]==2,blue: getscore()[i]==1}" v-if=""></li>
    </ul>
    <span class="hidden">{{ getlocal() }}/ {{ questionslength }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      questionslength: this.$store.state.questions.length,
    }
  },
  watch: {
    getscore (o,v) {
      return this.$store.state.score
    }
  },
  methods: {
    gettips () {
      return this.$store.state.tips;
    },
    getlocal () {
      return this.$store.state.local
    },
    getscore () {
      console.log(this.$store.state.score)
      return this.$store.state.score
    }
  }
}
</script>

<style lang="css" scoped>
.tips{
  position: absolute;
  top: 0;
  height: 5vh;
}
marquee {
  height: 4vh;
  line-height: 4vh;
  background: #000;
  color: #fff;
}
.bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.bar li{
  flex: 1;
  height: .5vh;

  transform: scaleX(1);
  transform-origin:left;
  transition: transform 1s;
}
.bar .red{
  background: red;
}
.bar .blue{
  background: rgb(89, 155, 179);
}
.hidden{
  display: none;
}
</style>
