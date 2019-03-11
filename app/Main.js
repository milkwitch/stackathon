import React from 'react'
import Select from '@material-ui/core/Select'
import Container from './Container';
import Tone from 'tone'

function bpmChange (target) {
  Tone.Transport.bpm.value = Number(target.value)
}

function drone (target) {
  const synth = new Tone.OmniOscillator('C3').toMaster()
  if (target.value === 'on') {
    synth.start()
  } else if (target.value === 'off') {
    synth.stop();
  }
}

export default function Main () {
  return (
    <div className="container">
        <Container />
        <div id ="bpm-select">
          <h2>Select BPM</h2>
          <Select onChange={(evt) => bpmChange(evt.target)}>
              <option value="BPM" disabled>BPM</option>
              <option value="60">60</option>
              <option value="80">80</option>
              <option value="100">100</option>
              <option value="120">120</option>
              <option value="140">140</option>
              <option value="160">160</option>
          </Select >
          <h2>Drone</h2>
          <Select onChange={(evt) => drone(evt.target)}>
          <option value="drone" disabled>Drone</option>
          <option value="on">On</option>
          <option value="off">Off</option>
          </Select>
        </div>
    </div>
  )
}
