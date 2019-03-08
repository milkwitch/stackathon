import React, {Component} from 'react'
import ChromaticScale from './ChromaticScale'

export default class Container extends Component {
  constructor () {
    super()
    this.state = {
      playing: false,
      tones: {
        1: {tglOn: true},
        2: {tglOn: true},
        3: {tglOn: true},
        4: {tglOn: true},
        5: {tglOn: true},
        6: {tglOn: true},
        7: {tglOn: true},
        8: {tglOn: true},
        9: {tglOn: true},
        10: {tglOn: true},
        11: {tglOn: true},
        12: {tglOn: true}
      }
    }
    this.toggleTone = this.toggleTone.bind(this)
  }
  
  toggleTone (key) {
    this.setState({})
  }
  
  render () {
    return (
      <div>
        <ChromaticScale tones={this.state.tones} playing={this.state.playing} toggleTone={this.toggleTone} />
      </div>
    )
  }
}
