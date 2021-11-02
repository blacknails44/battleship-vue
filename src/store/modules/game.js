import {colors, difficulties, difficultyList} from "@/constants/game";
import {generateBoard, generateShips} from "@/helpers/game";

const state = () => ({
    gameBoard: generateBoard(),
    currentTurn: 0,
    gameDifficulty: null,
    numberOfTurns: 50,
    ships: generateShips(),
    shipsDamagedPositions: {}
})

const getters = {
    isGameOver: (state) => {
        console.log(state.currentTurn, state.gameDifficulty?.numberOfTurns)
        const isTurnsFinished = state.currentTurn >= state.gameDifficulty?.numberOfTurns
        const isShipsDestroyed = state.ships.every(ship => !ship.isAlive)
        return isTurnsFinished || isShipsDestroyed
    },
    isWinner: (state) => {
        return state.ships.every(ship => !ship.isAlive)
    },
    difficulty: (state) => {
        return state.gameDifficulty
    },
    gameBoard: (state) => {
        return state.gameBoard
    }
}

const mutations = {
    handleAttackShip(state, { position }) {
        !state.gameBoard[position].isVisited && (state.currentTurn = state.currentTurn + 1)
        state.gameBoard[position].isVisited = true
        const ship = state.ships.find(ship => ship.squares.includes(position))
        if(ship) {
            state.ship = ship
            state.gameBoard[position].containsShip = true
            state.gameBoard[position].color = colors[ship.length]
            state.shipsDamagedPositions[position] = true
            ship.isAlive = !ship.squares.every(square => state.shipsDamagedPositions[square])
            if(!ship.isAlive) {
                // alert('')
            }
        }
    },
    setDifficulty(state, { difficulty }) {
        console.log('set idf', difficulty)
        state.gameDifficulty = difficulty
    }
}

const actions = {
    attackShip({ commit, state }, position) {
        console.log(commit)
        !state.gameBoard[position].isVisited && (state.currentTurn = state.currentTurn + 1)
        state.gameBoard[position].isVisited = true
        const ship = state.ships.find(ship => ship.squares.includes(position))
        if(ship) {
            state.ship = ship
            state.gameBoard[position].containsShip = true
            state.gameBoard[position].color = colors[ship.length]
            state.shipsDamagedPositions[position] = true
            ship.isAlive = !ship.squares.every(square => state.shipsDamagedPositions[square])
            if(!ship.isAlive) {
                alert('')
            }
        }
    },
    changeDifficulty({commit}, { difficulty = ''}) {
        const selectedDifficulty = difficultyList.find(difficultyEl => difficultyEl.name === difficulty)
        commit('setDifficulty', { difficulty: selectedDifficulty })
    },
    setInitialDifficulty({commit}) {
        const difficulty = {
            name: difficulties['HARD'],
            numberOfTurns: 50
        }
        commit('setDifficulty', { difficulty })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}