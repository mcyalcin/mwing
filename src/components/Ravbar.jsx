import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.min.css'

export class Ravbar extends React.Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar color="faded" dark className="bg-dark" expand="md">
          <NavbarBrand 
            href="/"
            onClick={(e) => {
              e.preventDefault()
              this.props.redirect('/')
            } }
          >Kuat Drive Yards</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink 
                  href="/squadbuilder/"
                  onClick={(e) => {
                    e.preventDefault()
                    this.props.redirect('/squadbuilder/')
                  } }
                >Squad Builder</NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="/lobby/"
                  onClick={(e) => {
                    e.preventDefault()
                    this.props.redirect('/lobby/')
                  } }
                >Lobby</NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="/profile/"
                  onClick={(e) => {
                    e.preventDefault()
                    this.props.redirect('/profile/')
                  } }
                >Profile</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

Ravbar.propTypes = {
  redirect: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
  redirect: (link) => dispatch(push(link))
})

export default connect(null, mapDispatchToProps, null, {pure: false})(Ravbar)
