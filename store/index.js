import {createStore} from 'redux'

const defaultState = {
  tones: {
    tonic: {noteName: 'C4', tglOn: true},
    m2: {noteName: 'Db4', tglOn: false},
    M2: {noteName: 'D4', tglOn: true},
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
}

const TOGGLE_TONE = 'TOGGLE_TONE'

const toggleTone = (scaleDegree) => {
  return {
    type: TOGGLE_TONE,
    scaleDegree
  }
}

export const findNote = (scaleDegree) => (dispatch) => {
  dispatch(toggleTone(scaleDegree))
}

function reducer (state = defaultState, action) {
  switch (action.type) {
    case 'TOGGLE_TONE':
      return {
        tones: {...tones,
          scaleDegree: {...scaleDegree,
            tglOn: !tglOn}
          }
      }
    default:
      return state;
  }
}

// const store = createStore(reducer);
// export default store
