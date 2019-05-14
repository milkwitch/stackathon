import React from 'react'
import Container from './Container';
import Header from './Header'

// function bpmChange (target) {
//   Tone.Transport.bpm.value = Number(target.value)
// }

// function drone (target) {
//   const synth = new Tone.OmniOscillator('C3').toMaster()
//   if (target.value === 'on') {
//     synth.start()
//   } else if (target.value === 'off') {
//     synth.stop();
//   }
// }

export default function Main () {
  return (
    <div className="container">
      <Header />
      <Container />
    </div>
  )
}
