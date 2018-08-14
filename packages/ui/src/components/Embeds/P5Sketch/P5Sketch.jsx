import React from 'react'
import p5 from 'p5'

type Props = {
  id: string,
  sketch: string
}

type State = {
  instance: any
}

class P5Sketch extends React.Component<Props, State> {
  state = { instance: null }

  componentDidMount() {
    const { id = 'p5-sketch', sketch } = this.props
    this.setState({
      instance: p5(sketch, id)
    })
  }

  render() {
    return <div id={this.props.id || 'p5-sketch'} />
  }
}

export default P5Sketch
