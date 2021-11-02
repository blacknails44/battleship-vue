<template>
<div class="settings">
  <div>
    <div class="label">Select a difficulty</div>
    <div class="difficulty">
      <button class="button" @click="changeDifficulty({difficulty: 'Easy' })">Easy</button>
      <button class="button" @click="changeDifficulty({difficulty: 'Medium' })">Medium</button>
      <button class="button" @click="changeDifficulty({difficulty: 'Hard' })">Hard</button>
    </div>
  </div>
</div>
</template>

<script>

import { mapActions, mapState } from "vuex";
import Swal from 'sweetalert2'

export default {
  name: "Settings",
  computed: {
    ...mapState('game',{
      gameDifficulty: "gameDifficulty"
    })
  },
  methods: {
    ...mapActions('game', {
      changeDifficulty: 'changeDifficulty'
    }),
    handleChangeDifficulty(difficulty) {
      Swal.fire({
        title: `Change the difficulty to ${difficulty?.difficulty}`
      }).then( result => {
        if(result?.isConfirmed)
          this.changeDifficulty(difficulty)
      })
    }
  },
}
</script>

<style scoped>
.settings {
  padding: 2rem;
}

.label {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: .5rem;
}
.difficulty {
  display: flex;
  gap: 1rem;
}
.button {
  background: #087EA4;
  color: #FFFFFF;
  font-weight: 600;
  padding: 6px 1rem;
  border-radius: .5rem;
}
</style>