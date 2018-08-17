import React from 'react'
import p5 from 'p5'

const defaultID = 'p5-sketch'

class P5Sketch extends React.Component {
  state = { instance: null }

  componentDidMount() {
    const { id = defaultID, sketch } = this.props
    this.setState({
      instance: new p5(sketch, id)
    })
  }

  render() {
    return <div id={this.props.id || defaultID} />
  }
}

export default P5Sketch
