const sampleUnit = {
  name: 'Academy Pilot',
  icon: 'xwing-miniatures-ship-tiefighter',
  pilotSkill: 1,
  firepower: 2,
  maneuver: 3,
  hull: 3,
  shield: 0,
  actionBar: ['focus', 'barrelRoll', 'evade'],
  upgradeSlots: ['modification'],
  upgrades: {
    modification: null,
  },
  maneuverChart: {
    '5f': 'white',
    '4f': 'white',
    '3f': 'green',
    '2f': 'green',
    '3tr': 'white',
    '3tl': 'white',
    '2tr': 'white',
    '2tl': 'white',
    '1tr': 'white',
    '1tl': 'white',
    '3br': 'white',
    '3bl': 'white',
    '2br': 'green',
    '2bl': 'green',
    '4k': 'red',
    '3k': 'red',
  },
}

const squad = (state = [sampleUnit], action) => {
  switch (action.type) {
    case 'ADD_UNIT': return [...state, action.squad]
    case 'REMOVE_UNIT': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    default: return state
  }
}

export default squad
