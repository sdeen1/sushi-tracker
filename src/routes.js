import addRoll from './components/addRoll'
import listRolls from './components/listRolls'

export default [
    { path: '/', component: listRolls },
    { path: '/add', component: addRoll }
]