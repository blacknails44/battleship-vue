<template>
  <div class="home">
    <div class="game-title">
      <img :src="icons.ship" width="64" class="mr-4">
      Battleship
    </div>
    <div class="flex">
      <div>
        Current Turn: {{ currentTurn }}
      </div>
    </div>
      <div>
        Difficulty: {{difficulty}}
      </div>
    <div class="board-wrapper">
      <div class="flex">
        <div class="mr-4 first-col"></div>
        <div v-for="(col, index) in cols" :key="`col-${index}`" class="row-title flex-1">{{ col }}</div>
      </div>
      <div class="flex">
        <div class="mr-4 flex flex-col gap-1 rows-container">
          <div v-for="(row, index) in rows" :key="`row-${index}`" class="row-title">{{ row }}</div>
        </div>
        <div class="board-grid">
          <div v-for="(square, index) in gameBoard" :key="index" @click="attackShip(index)" class="board-square"
               :style="{backgroundColor: square.color}">
            <img :src="icons.ship" alt="" v-if="square.isVisited && square.containsShip">
            <img :src="icons.cross" alt="" v-else-if="square.isVisited">
            <img :src="icons.ocean" alt="" v-else>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

import { rows, cols} from "@/constants/game";
import ocean from '@/assets/ocean.svg'
import sword from '@/assets/sword-cross.svg'
import ship from '@/assets/ship.svg'
import cross from '@/assets/cross.svg'

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      icons: {
        ocean,
        sword,
        ship,
        cross,
      },
      rows,
      cols
    }
  },
  methods: {
    attackShip(position) {
      this.$store.commit('game/handleAttackShip', {position})
    },
  },
  computed: {
    ...mapGetters('game', {
      isGameOver: 'isGameOver',
      isWinner: 'isWinner',
      difficulty: 'difficulty',
      gameBoard: 'gameBoard'
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
  padding: 1rem;
}

.board-grid {
  display: grid;
  grid-template-columns: repeat(10, 3rem);
}

.board-square {
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-title {
  font-size: 40px;
font-weight: 700;
  display: flex;
  align-items: center;
}

.rows-container {
  gap: 2px;
}
.row-title {
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  gap: 2px;
}

.first-col {
  width: 3rem;
  height: 3rem;
}
</style>