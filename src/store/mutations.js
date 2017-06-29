export const addlocal = (state,ans) => {
  state.questions[state.local-1].uans = ans+1;
  if(state.questions[state.local-1].uans != 0){
    if(state.questions[state.local-1].uans == state.questions[state.local-1].answer){
      state.score[state.local-1] = 2;
    }
    if(state.questions[state.local-1].uans != state.questions[state.local-1].answer){
      state.score[state.local-1] = 1;
    }
  }
  console.log(state.score)
  console.log(ans+1)
  console.log(state.questions)
  if(state.local < state.questions.length) {
    state.local++;
  }
}
