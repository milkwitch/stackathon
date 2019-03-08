import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import Tone from 'tone'
import {play} from './instrument'

export default class ChromaticScale extends Component {
  // constructor (props) {
    // super(props)
  // }
  keyPressed (evt) {
    if (evt.key === ' '){
      play()
    } else if (Number(evt.key) <= 9) {
      const button = document.getElementById(evt.key)
      
      button.toggleAttribute('disabled');
    }
  }

  render () {
    window.onkeydown = this.keyPressed
    return (
      <div>
        <div className="scale-container">
          <Button id='1' variant='fab'>1</Button>
          <Button id='2' variant='fab'>2</Button>
          <Button id='3' variant='fab'>3</Button>
          <Button id='4' variant='fab'>4</Button>
          <Button id='5' variant='fab'>5</Button>
          <Button id='6' variant='fab'>6</Button>
          <Button id='7' variant='fab'>7</Button>
          <Button id='8' variant='fab'>8</Button>
          <Button id='9' variant='fab'>9</Button>
          <Button id='10' variant='fab'>0</Button>
          <Button id='11' variant='fab'>-</Button>
          <Button id='12' variant='fab'>=</Button>
        </div>
      </div>
    )
  }
}
