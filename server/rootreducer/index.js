const { combineReducers } = require('redux')

const players = require('../players/reducer')
const bombs = require('../bombs/reducer')
const mapState = require('../maps/reducer');
const timer = require('../timer/reducer');
const winner = require('../winner/reducer')

module.exports = combineReducers({
  players,
  bombs,
  mapState,
  timer,
  winner
})