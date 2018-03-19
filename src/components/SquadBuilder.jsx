import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import UnitCard from './UnitCard'

class SquadBuilder extends React.Component {
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

SquadBuilder.propTypes = {
  units: PropTypes.arrayOf(PropTypes.object),
  removeUnit: PropTypes.func,
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
