import React, {Component} from 'react'
import Select from '@material-ui/core/Select'
import ChromaticScale from './ChromaticScale'
import Tone from 'tone'

const synth = new Tone.PolySynth(12, Tone.Synth).toMaster()
Tone.Transport.bpm.value = 160;
Tone.Transport.start()


export default class Container extends Component {
  constructor () {
    super()
    this.state = {
        pattern: 'chord',
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
    this.generateNotes = this.generateNotes.bind(this)
    this.play = this.play.bind(this)
    this.arpeggio = this.arpeggio.bind(this)
    this.ascending = this.ascending.bind(this)
    this.descending = this.descending.bind(this)
  }

  go (note) {
    synth.triggerAttackRelease(note, '8n')
  }
  
  generateNotes () {
    let notes = []
  for (let key in this.state) {
    if (this.state[key].tglOn) {
      notes.push(this.state[key].noteName)
    }
  }
  return notes;
  }

 setPattern (pattern) {
  let patternArg = ''
  if (pattern === 'chord') {
    this.setState({pattern: 'chord'})
    return this.chordSynth();
  } else if (pattern === 'ascending') {
    this.setState({pattern: 'up'})
    patternArg = 'up'
    return patternArg
  } else if (pattern === 'descending') {
    this.setState({pattern: 'down'})
    patternArg = 'down'
    return patternArg
  } else if (pattern === 'arpeggio') {
    this.setState({pattern: 'upDown'})
    patternArg = 'upDown'
    return patternArg
  }
}

chordSynth () {
    synth.triggerAttackRelease(this.generateNotes(), '4n');
}

patternObj (pattern, notesArray) {
      return new Tone.Pattern(function(time, note) {
        synth.triggerAttackRelease(note, '4n');
      }, notesArray, pattern);
}

arpeggio () {
  let notes = []
  for (let key in this.state) {
    if (this.state[key].tglOn) {
      notes.push(this.state[key].noteName)
    }
  }
  console.log('ARPEGGIO', this.state)
  const patternObj = new Tone.Pattern(function(time, note) {
    synth.triggerAttackRelease(note, '4n');
  }, notes, 'upDown')
  patternObj.iterations = (notes.length * 2) - 1
  patternObj.start();
}

play () {
  let notes = []
  for (let key in this.state) {
    if (this.state[key].tglOn) {
      notes.push(this.state[key].noteName)
    }
  }
  console.log('PLAY', notes)
    synth.triggerAttackRelease(notes, '4n')
}

  ascending () {
    let notes = []
  for (let key in this.state) {
    if (this.state[key].tglOn) {
      notes.push(this.state[key].noteName)
    }
  }
  const patternObj = new Tone.Pattern(function(time, note) {
    synth.triggerAttackRelease(note, '4n');
  }, notes, 'up')
  patternObj.iterations = (notes.length * 2) - 1
  patternObj.start();
  }
  
  descending () {
    let notes = []
  for (let key in this.state) {
    if (this.state[key].tglOn) {
      notes.push(this.state[key].noteName)
    }
  }
  const patternObj = new Tone.Pattern(function(time, note) {
    synth.triggerAttackRelease(note, '4n');
  }, notes, 'down')
  patternObj.iterations = (notes.length * 2) - 1
  patternObj.start();
  }

  toggleTone (scaleDegree) {
    let note = this.state[scaleDegree]
    note.tglOn = !note.tglOn
    this.setState({[scaleDegree]: note})
  }

  render () {
    return (
      <div id="inner-container">
        <h2>Use the number keys to toggle tones on or off</h2>
        <ChromaticScale tones={this.state} toggleTone={this.toggleTone} play={this.play} arpeggio={this.arpeggio} ascending={this.ascending} descending={this.descending} />
        <h2>Select a pattern</h2>
        <Select onChange={(evt => this.setPattern(evt.target.value))}>
            <option value="pattern" disabled>Pattern</option>
            <option value="chord">Chord</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
            <option value="arpeggio">Arpeggio</option>
        </Select>
        <h3>Keys:</h3>
        <h2>space = chord, a = arpeggio up and down, d = arpeggio down, u = arpeggio up</h2>
      </div>
    )
  }
}
