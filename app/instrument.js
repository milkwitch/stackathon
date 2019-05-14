import Tone from 'tone'
//IN USE
const tones = {
  1: 'C4',
  2: 'Db4',
  3: 'D4',
  4: 'Eb4',
  5: 'E4',
  6: 'F4',
  7: 'Gb4',
  8: 'G4',
  9: 'Ab4',
  10: 'A4',
  11: 'Bb4',
  12: 'B4'
}

const scale = {
  1: true,
  2: false,
  3: false,
  4: false,
  5: true,
  6: false,
  7: false,
  8: true,
  9: false,
  10: false,
  11: false,
  12: false
}

const env = new Tone.AmplitudeEnvelope({
  attack: 1.5
})
const synth = new Tone.PolySynth(12, Tone.Synth).connect(env).toMaster();

const toneTrigger = (key) => {
  return tones[key]
}

const chordTrigger = (scaleObj, toneObj) => {
  let selectedTones = []
  for (let key in scaleObj) {
    if (scaleObj[key] === true) {
      selectedTones.push(toneObj[key])
    }
  }
  return selectedTones
}

export const play = () => {
  synth.triggerAttackRelease(chordTrigger(scale, tones), '4n')
}

Tone.Transport.start();

//CURRENTLY NOT IN USE

// const delay = new Tone.Delay(1)
// delay.toMaster()

function ascending () {
  chordTrigger(scale, tones).map(tone => {
    // synth.connect(delay)
    synth.triggerAttackRelease(tone, '4n')
  })
}
// ascending()
// synth.triggerAttackRelease([scale[1], scale[3], scale[5]], '4n')
