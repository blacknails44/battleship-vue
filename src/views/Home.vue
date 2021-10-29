<template>
  <div class="home">
    <div class="game-title">
      <img :src="ship" width="64" class="mr-4">
      Battleship
    </div>
    <div>
      Current Turn: {{ currentTurn }}
    </div>
    <div class="board-wrapper">
      <div class="board-grid">
        <div v-for="(square, index) in gameBoard" :key="index" @click="attackShip(index)" class="board-square"
             :style="{backgroundColor: square.color}">
          <img :src="ship" alt="" v-if="square.isVisited && square.containsShip">
          <img :src="sword" alt="" v-else-if="square.isVisited">
          <img :src="ocean" alt="" v-else>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

import ocean from '@/assets/ocean.svg'
import sword from '@/assets/sword-cross.svg'
import ship from '@/assets/ship.svg'

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      ocean,
      sword,
      ship
    }
  },
  methods: {
    attackShip(position) {
      this.$store.commit('game/handleAttackShip', {position})
    }
  },
  computed: {
    gameBoard() {
      return this.$store.state.game.gameBoard
    },
    ...mapGetters('game', {
      isGameOver: 'isGameOver',
      isWinner: 'isWinner'
    }),
    ...mapState({
      currentTurn: state => state.game.currentTurn
    })
  }
}
</script>

<style>

.home {
  padding: 2rem;
}
.board-wrapper {
  display: flex;
  justify-content: center;
}

.board-grid {
  display: grid;
  grid-template-columns: repeat(10, 4.1rem);
  row-gap: 2px;
  column-gap: 0;
}

.board-square {
  width: 4rem;
  height: 4rem;
  border: 1px solid black;
  cursor: pointer;
}

.game-title {
  font-size: 40px;
font-weight: 700;
  display: flex;
  align-items: center;
}
</style>