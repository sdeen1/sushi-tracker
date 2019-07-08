import addRoll from './components/addRoll'
import listRolls from './components/listRolls'
import randomRolls from './components/randomRolls'

export default [
    { path: '/', component: listRolls },
    { path: '/add', component: addRoll },
    { path: '/random', component: randomRolls }
]