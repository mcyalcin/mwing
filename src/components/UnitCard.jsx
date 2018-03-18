import React from 'react'
import PropTypes from 'prop-types'

export default class UnitCard extends React.Component {
  render() {
    return (
      <div className="container">
        <div>{this.props.unit.name}</div>
        <div className="row">
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
          <div className="col-sm">
            One of three columns
          </div>
        </div>
        <div>Ability text</div>
        <div>Upgrades</div>
      </div>
    )
  }
}

UnitCard.propTypes = {
  onRemove: PropTypes.func,
  unit: PropTypes.object,
}
