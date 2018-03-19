import React from 'react'
import PropTypes from 'prop-types'

import 'xwing-miniatures-font/dist/xwing-miniatures.css'
import 'xwing-miniatures-font/dist/xwing-miniatures.ttf'
import 'xwing-miniatures-font/dist/xwing-miniatures-ships.ttf'
import '../style/main.css'
import '../fonts/kimberley bl.ttf'
import { iconMap } from '../helpers'

import { Attack, Agility, Hull, Shield } from './Stat'

export default class UnitCard extends React.Component {
  render() {
    const { unit } = this.props

    const unitCardStyle = {
      fontFamily: 'KimberleyBl',
      backgroundColor: '#B3B3B3',
    }

    const pilotSkillStyle = {
      color: '#FB870C',
      fontSize: 'large',
    }

    const actionBarStyle = {
      color: 'white',
    }

    const actionBar =  unit.actionBar.map((action, index) => <div key={index}>{iconMap[action]}</div>)
    return (
      <div className="container" style={unitCardStyle}>
        <div className="row">
          <div className="col col-1">{iconMap[unit.chassis]}</div>
          <div className="col">{unit.name}</div>
        </div>
        <div className="row">
          <div className="col col-2" style={pilotSkillStyle}>
            {unit.pilotSkill}
          </div>
          <div className="col">
            <div className="row container">
              <Attack value={unit.attack} />
              <Agility value={unit.agility} />
              <Hull value={unit.hull} />
              <Shield value={unit.shield} />
            </div>
          </div>
          <div className="col" style={actionBarStyle}>
            <div className="row">
              {actionBar}
            </div>
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
