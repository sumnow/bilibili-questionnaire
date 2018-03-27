<template lang="html">
  <div class="center">
    <h2>Question {{ getindex }} </h2>

    <p>{{ getcontent }}</p>
    <ul>
      <li v-for="(v,i) in getoptions" @click="[addlocal(i)]"> {{ optionsym[i] }}. {{ getoptions[i] }}</li>
    </ul>


  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      optionsym:['A','B','C','D']
    }
  },
  computed: mapGetters([
    'getcontent',
    'getindex',
    'getoptions'
  ]),
  methods: mapActions(['addlocal'])
  ,
  created () {
    console.log(this.$store)
  },
  watch: {
    getindex: function (v,o){
      if( v === o ){
        console.log(2)
        console.log(this.$route)
      }
    }
  }
}
</script>

<style lang="css" scoped>
  h2 {
    text-align: center;
    color: #fff;
  }

</style>
