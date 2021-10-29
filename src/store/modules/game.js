import {colors, numberOfTurnsByDifficulty} from "@/constants/game";
import {generateBoard, generateShips} from "@/helpers/game";

const state = () => ({
    gameBoard: generateBoard(),
    currentTurn: 0,
    gameDifficulty: 'MEDIUM',
    numberOfTurns: 50,
    ships: generateShips(),
    shipsDamagedPositions: {}
})

const getters = {
    isGameOver: (state) => {
        const isTurnsFinished = state.currentTurn === numberOfTurnsByDifficulty[state.gameDifficulty]
        const isShipsDestroyed = state.ships.every(ship => !ship.isAlive)
        return isTurnsFinished || isShipsDestroyed
    },
    isWinner: (state) => {
        return state.ships.every(ship => !ship.isAlive)
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
                alert('')
            }
        }
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}