import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Tone from 'tone'

// const synth = new Tone.PolySynth('12', Tone.Synth).toMaster()
//     Tone.Transport.start()
    
export default class ChromaticScale extends Component {
  constructor (props) {
    super(props)
    this.keyPressed = this.keyPressed.bind(this)
  }
  keyPressed (evt) {
    const props = this.props
    if (evt.key === ' ') {
      props.play();
    } else if (evt.key === 'a') {
      props.arpeggio();
    } else if (evt.key === 'u') {
       props.ascending();
    } else if (evt.key === 'd') {
        props.descending()
    } else {
      const scaleDegrees = {
        1: 'tonic',
        2: 'm2',
        3: 'M2',
        4: 'm3',
        5: 'M3',
        6: 'P4',
        7: 'b5',
        8: 'P5',
        9: 'm6',
        0: 'M6',
        '-': 'm7',
        '=': 'M7'
      }
      const button = document.getElementById(scaleDegrees[evt.key])
      console.log('BUTTON', button)
      button.toggleAttribute('disabled')
      
      const note = this.props.tones[`${scaleDegrees[evt.key]}`]
      console.log('NOTE', note)
      this.props.toggleTone(`${scaleDegrees[evt.key]}`)
    }
}

  render () {
    window.onkeydown = this.keyPressed
    console.log('PROPS FROM CHROM', this.props)
    const tones = this.props.tones
    return (
      <div className='scale-container'>
        <Button id='tonic' variant='fab' disabled={!tones.tonic.tglOn}>1</Button>
        <Button id='m2' variant='fab' disabled={!tones.m2.tglOn}>2</Button>
        <Button id='M2' variant='fab' disabled={!tones.M2.tglOn}>3</Button>
        <Button id='m3' variant='fab' disabled={!tones.m3.tglOn}>4</Button>
        <Button id='M3' variant='fab' disabled={!tones.M3.tglOn}>5</Button>
        <Button id='P4' variant='fab' disabled={!tones.P4.tglOn}>6</Button>
        <Button id='P5' variant='fab' disabled={!tones.b5.tglOn}>7</Button>
        <Button id='b5' variant='fab' disabled={!tones.P5.tglOn}>8</Button>
        <Button id='m6' variant='fab' disabled={!tones.m6.tglOn}>9</Button>
        <Button id='M6' variant='fab' disabled={!tones.M6.tglOn}>0</Button>
        <Button id='m7' variant='fab' disabled={!tones.m7.tglOn}>-</Button>
        <Button id='M7' variant='fab' disabled={!tones.M7.tglOn}>=</Button>
      </div>
    )
  }
}
