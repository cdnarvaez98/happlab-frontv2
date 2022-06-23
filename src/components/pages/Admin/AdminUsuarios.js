import React, { Component } from 'react'
import Header from './TemplatesAdmin/Header'
import Menu from './TemplatesAdmin/Menu'
import Dashboard from './TemplatesAdmin/Dashboard'
import Footer from '../../navegation/footer/Footer'

export default class AdminUsuarios extends Component {
  render() {
    return (
      <div class="wrapper">
        <Header/>
        <Menu/>
        <Dashboard/>
        <Footer/>
      </div>
    )
  }
}
