// @flow
import React from 'react'
import { connect } from 'react-redux'

import UnitCard from './UnitCard'

class SquadBuilder extends React.Component<{
  units: Array<Object>,
  removeUnit: Function,
}> {
  render() {
    const listItems = this.props.units.map((unit, index) => (
      <UnitCard key={index} unit={unit} onRemove={() => this.props.removeUnit(index)} />
    ))
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  units: state.app.squadbuilder.squad
})

const mapDispatchToProps = (dispatch) => ({
  removeUnit: (index) => dispatch({
    type: 'REMOVE_UNIT',
    index,
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(SquadBuilder)
