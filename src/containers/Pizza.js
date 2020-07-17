import React, { Component } from 'react'

import PizzaImage from '../components/PizzaImage/PizzaImage'

class Pizza extends Component {
  render() {
    return (
      <div>
        <hi>The pizza 👇</hi>
        <PizzaImage />
      </div>
    )
  }
}

export default Pizza