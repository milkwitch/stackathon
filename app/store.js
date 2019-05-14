import { createStore } from 'redux'

//Action Types
const TOGGLE_NOTE = 'TOGGLE_NOTE'

const toggleNote = (note) => {
  return {
    type: TOGGLE_NOTE,
    note
  }
} 

const initialState = { 
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NOTE:
      return {...state}
      default:
        return {...state}
  }
}
