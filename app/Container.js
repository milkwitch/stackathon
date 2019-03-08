import React, {Component} from 'react'
import ChromaticScale from './ChromaticScale'
import Tone from 'tone'

const synth = new Tone.PolySynth(12, Tone.Synth).toMaster()
Tone.Transport.start()
    
export default class Container extends Component {
  constructor () {
    super()
    this.state = {
        tonic: {noteName: 'C4', tglOn: false},
        m2: {noteName: 'Db4', tglOn: false},
        M2: {noteName: 'D4', tglOn: false},
        m3: {noteName: 'Eb4', tglOn: false},
        M3: {noteName: 'E4', tglOn: false},
        P4: {noteName: 'F4', tglOn: false},
        b5: {noteName: 'Gb4', tglOn: false},
        P5: {noteName: 'G4', tglOn: false},
        m6: {noteName: 'Ab4', tglOn: false},
        M6: {noteName: 'A4', tglOn: false},
        m7: {noteName: 'Bb4', tglOn: false},
        M7: {noteName: 'B4', tglOn: false}
    }
    this.toggleTone = this.toggleTone.bind(this)
    this.play = this.play.bind(this)
  }

  go (note) {
    synth.triggerAttackRelease(note)
  }
  
  play () {
    let notes = []
    for (let key in this.state) {
      if (this.state[key].tglOn) {
        notes.push(this.state[key].noteName)
      }
    }
    console.log(notes)
    const seq = new Tone.Sequence(function(time, note) {
      synth.triggerAttackRelease(note, time)
    }, notes, '32n')
    seq.loop = 1
    seq.start()
  }

  ascending () {
    const delay = new Tone.Delay(5)
    for (let key in this.state) {
      if (this.state[key].tglOn) {
        synth.triggerAttackRelease(this.state[key].noteName, '4n').connect(delay)
      }
    }
  }

  toggleTone (scaleDegree) {
    console.log('STATE FROM PROPS', this.state)
    console.log('SCALEDEGREE', this.state[scaleDegree])
    let note = this.state[scaleDegree]
    note.tglOn = !note.tglOn
    this.setState({[scaleDegree]: note})
  }

  render () {
    return (
      <div id="inner-container">
        <ChromaticScale tones={this.state} toggleTone={this.toggleTone} play={this.play} />
      </div>
    )
  }
}
