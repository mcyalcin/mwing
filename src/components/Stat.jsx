// @flow

import React from 'react'

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

const Stat = ({ value, icon, style }: {value: number, icon: Object, style: Object}) => (
  <div className="col" style={style}>{icon}{' '}{value}</div>
)

const Attack = ({ value }: {value: number}) => (
  <Stat style={firepowerStyle} icon={iconMap['attack']} value={value} />
)

const Agility = ({ value }: {value: number}) => (
  <Stat style={agilityStyle} icon={iconMap['agility']} value={value} />
)

const Hull = ({ value }: {value: number}) => (
  <Stat style={hullStyle} icon={iconMap['hull']} value={value} />
)

const Shield = ({ value }: {value: number}) => (
  <Stat style={shieldStyle} icon={iconMap['shield']} value={value} />
)

export { Attack, Agility, Hull, Shield }
