import React from 'react'
import PropTypes from 'prop-types'

import { iconMap } from '../helpers'

const firepowerStyle = {
  color: '#F00C2D',
  fontFamily: 'KimberleyBl',
}

const agilityStyle = {
  color: '#9AD81D',
  fontFamily: 'KimberleyBl',
}

const hullStyle = {
  color: '#F7F608',
  fontFamily: 'KimberleyBl',
}

const shieldStyle = {
  color: '#8DDCEB',
  fontFamily: 'KimberleyBl',
}

const Stat = ({ value, icon, style }) => (
  <div className="col" style={style}>{icon}{' '}{value}</div>
)

Stat.propTypes = {
  value: PropTypes.number,
  icon: PropTypes.object,
  style: PropTypes.object,
}

const Attack = ({ value }) => (
  <Stat style={firepowerStyle} icon={iconMap['attack']} value={value} />
)

const Agility = ({ value }) => (
  <Stat style={agilityStyle} icon={iconMap['agility']} value={value} />
)

const Hull = ({ value }) => (
  <Stat style={hullStyle} icon={iconMap['hull']} value={value} />
)

const Shield = ({ value }) => (
  <Stat style={shieldStyle} icon={iconMap['shield']} value={value} />
)

Attack.propTypes = {
  value: PropTypes.number,
}

Agility.propTypes = {
  value: PropTypes.number,
}

Hull.propTypes = {
  value: PropTypes.number,
}

Shield.propTypes = {
  value: PropTypes.number,
}

export { Attack, Agility, Hull, Shield }