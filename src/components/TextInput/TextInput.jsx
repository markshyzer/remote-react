// import './TextInput.css';

import { useEffect, useState } from "react"

class Keyboard {
    constructor(layout, start_key){
        this.layout = layout
        this.start_key = start_key
        this.position = this.find(start_key)
        this.string = ''
    }

    find(x) {
        x = x.toLowerCase()
        let position = []
        this.layout.forEach(function (line, index){
            let found = line.findIndex((function (element) {
                return element === x;
            }))
            if (found >= 0){
                position = [index, found]
                return position
            } else {
                return 'Character not found in keyboard'
            }
        });
        return position
    }

    delta(start, end){
        return [start[0]-end[0], start[1]-end[1]]
    }

    path(delta){
        let moves = []
        if (delta[0] < 0){
            for (let i = 0; i < Math.abs(delta[0]); i++){
            moves.push('Down')
            }
        } else if (delta[0] > 0){
            for (let i = 0; i < delta[0]; i++){
            moves.push('Up')
            }
        }
        if (delta[1] < 0){
            for (let i = 0; i < Math.abs(delta[1]); i++){
            moves.push('Right')
            }
        } else if (delta[1] > 0){
            for (let i = 0; i < delta[1]; i++){
            moves.push("Left")
            }
        }
        return moves
    }

    keyValue(position){
        return this.layout[position[0]][position[1]]
    }

    getMoves(character){
        const p = this.position
        const f = this.find(character)
        const d = this.delta(p, f)
        const m = this.path(d)
        if (character === ' ' || character === 'del') {
            m.reverse()
        }
        m.push('Confirm')
        return m
    }
}

const keyboard = new Keyboard( [
    [' ', ' ', ' ', 'del', 'del', 'del'],
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['g', 'h', 'i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p', 'q', 'r'],
    ['s', 't', 'u', 'v', 'w', 'x'],
    ['y', 'z', '1', '2', '3', '4'],
    ['5', '6', '7', '8', '9', '0'],
], 'a')




function TextInput(props) {
    const [input, setInput] = useState('gosh')
    const [sending, setSending] = useState(false)
    // function clearRemoteInput(){
    //     keyboard.string = ''
    //     stringInput.value = ''
    // }
    
    // async function clearTVInput(){
    //     const l = keyboard.string.length
    //     await sendMoves(keyboard.getMoves('del'))
    //     keyboard.position = keyboard.find('del')
    //     for (let i = 0; i < l; i++){
    //         await sendCommand('Confirm', delay=600, display=false)
    //     }
    // }

    function handleTextInput(e){ 
        console.log(e.target.value)
        if (e.target.value){
            console.log('got some input')
            setInput(e.target.value)
            // stringInput.removeEventListener('input', handleTextInput)
            // processText()
        }
    }

    const starterPromise = Promise.resolve(null);

    let sendMoves = async (moves) => {
        await moves.reduce(
            (p, move, i) => p.then(() => props.sendCommand(move)),
            starterPromise
            );
        }

    async function processText(e){
        const text = (e.target.value)
        if (e.target.value){
            console.log('got some input', e.target.value)

            console.log(text)
            setSending(true)
        const current_character = text[keyboard.string.length]
        await sendMoves(keyboard.getMoves(current_character))
        keyboard.position = keyboard.find(current_character)
        keyboard.string = keyboard.string + current_character
        // text.textContent=keyboard.keyValue(keyboard.position)
        if (text.length > keyboard.string.length){
            console.log('comparison true')
            processText()
        } else {
            // stringInput.addEventListener('input', handleTextInput)
        }
        setSending(false)
    }
    }
    // useEffect(() => {
    //     console.log("doing something on the text input")
    //     console.log(input, input.length)
    //     processText(input)
    // }, [input])




  return (
    <div className='section' id='keyboard-input'>
        <div className='wrapper'>
        <div className='button no-hover' id='current-value'></div>
        <input className='input-text' id='string-input' type="text" onChange={sending? undefined : (e) => processText(e)}></input>
        <div className='button' id='clear'>&#9746;</div>
        </div>
    </div>
  );
}

export default TextInput;