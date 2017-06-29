import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  title: '学院都市的试炼',
  timer: 0,
  tips: '题目出自于魔法禁书目录及衍生物，最终解释权归B站所有---哔哩哔哩(゜-゜)つロ干杯---',
  local: 1,
  score: [0,0,0],
  questions: [
    {
      index: 1,
      content: '第一个遇见当麻的是几号御坂妹？',
      options:['9982号','10982号', '7982号', '6982号'],
      answer: 1,
      uans:0,
    },
    {
      index: 2,
      content: '以下哪个角色对御坂美琴有不一样的情感',
      options:['食蜂操祈','初春饰利', '佐天泪子', '白井黑子'],
      answer: 4,
      uans:0,
    },
    {
      index: 3,
      content: '以下哪个角色的能力等级与其他人不同？',
      options:['结标淡希','婚后光子', '麦野沉利', '白井黑子'],
      answer: 3,
      uans:0,
    },
    {
      index: 4,
      content: '御坂妹琴的血型是?',
      options:['A','AB', 'O', 'B'],
      answer: 2,
      uans:0,
    },
    {
      index: 5,
      content: '以下哪个角色不是超能力者?',
      options:['一方通行','御坂美琴', '麦野沉利', '神烈火织'],
      answer: 4,
      uans:0,
    }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
