import React from "react"
import { SelectStars } from "../styles/components"

class Start extends React.Component {
  constructor() {
    super()
    this.state = { starts: 5 }
  }
  render() {
    return (
      <SelectStars selected={this.state.starts}>
        <span onClick={() => this.setState({ starts: 1 })}>★</span>
        <span onClick={() => this.setState({ starts: 2 })}>★</span>
        <span onClick={() => this.setState({ starts: 3 })}>★</span>
        <span onClick={() => this.setState({ starts: 4 })}>★</span>
        <span onClick={() => this.setState({ starts: 5 })}>★</span>
      </SelectStars>
    )
  }
}

export default Start
