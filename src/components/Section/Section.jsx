import './Section.css';
import Button from '../Button/Button';
import React, { useContext } from 'react'
import { RemoteContext } from "../../App";

// const code_list = {
//   "PowerOff" : "AAAAAQAAAAEAAAAvAw==",
//   "Input" : "AAAAAQAAAAEAAAAlAw==",
//   "GGuide" : "AAAAAQAAAAEAAAAOAw==",
//   "EPG" : "AAAAAgAAAKQAAABbAw==",
//   "Favorites" : "AAAAAgAAAHcAAAB2Aw==",
//   "Display" : "AAAAAQAAAAEAAAA6Aw==",
//   "Home" : "AAAAAQAAAAEAAABgAw==",
//   "Options" : "AAAAAgAAAJcAAAA2Aw==",
//   "Return" : "AAAAAgAAAJcAAAAjAw==",
//   "Up" : "AAAAAQAAAAEAAAB0Aw==",
//   "Down" : "AAAAAQAAAAEAAAB1Aw==",
//   "Right" : "AAAAAQAAAAEAAAAzAw==",
//   "Left" : "AAAAAQAAAAEAAAA0Aw==",
//   "Confirm" : "AAAAAQAAAAEAAABlAw==",
//   "Red" : "AAAAAgAAAJcAAAAlAw==",
//   "Green" : "AAAAAgAAAJcAAAAmAw==",
//   "Yellow" : "AAAAAgAAAJcAAAAnAw==",
//   "Blue" : "AAAAAgAAAJcAAAAkAw==",
//   "Num1" : "AAAAAQAAAAEAAAAAAw==",
//   "Num2" : "AAAAAQAAAAEAAAABAw==",
//   "Num3" : "AAAAAQAAAAEAAAACAw==",
//   "Num4" : "AAAAAQAAAAEAAAADAw==",
//   "Num5" : "AAAAAQAAAAEAAAAEAw==",
//   "Num6" : "AAAAAQAAAAEAAAAFAw==",
//   "Num7" : "AAAAAQAAAAEAAAAGAw==",
//   "Num8" : "AAAAAQAAAAEAAAAHAw==",
//   "Num9" : "AAAAAQAAAAEAAAAIAw==",
//   "Num0" : "AAAAAQAAAAEAAAAJAw==",
//   "Num11" : "AAAAAQAAAAEAAAAKAw==",
//   "Num12" : "AAAAAQAAAAEAAAALAw==",
//   "VolumeUp" : "AAAAAQAAAAEAAAASAw==",
//   "VolumeDown" : "AAAAAQAAAAEAAAATAw==",
//   "Mute" : "AAAAAQAAAAEAAAAUAw==",
//   "ChannelUp" : "AAAAAQAAAAEAAAAQAw==",
//   "ChannelDown" : "AAAAAQAAAAEAAAARAw==",
//   "SubTitle" : "AAAAAgAAAJcAAAAoAw==",
//   "ClosedCaption" : "AAAAAgAAAKQAAAAQAw==",
//   "Enter" : "AAAAAQAAAAEAAAALAw==",
//   "DOT" : "AAAAAgAAAJcAAAAdAw==",
//   "Analog" : "AAAAAgAAAHcAAAANAw==",
//   "Teletext" : "AAAAAQAAAAEAAAA/Aw==",
//   "Exit" : "AAAAAQAAAAEAAABjAw==",
//   "Analog2" : "AAAAAQAAAAEAAAA4Aw==",
//   "*AD" : "AAAAAgAAABoAAAA7Aw==",
//   "Digital" : "AAAAAgAAAJcAAAAyAw==",
//   "Analog?" : "AAAAAgAAAJcAAAAuAw==",
//   "BS" : "AAAAAgAAAJcAAAAsAw==",
//   "CS" : "AAAAAgAAAJcAAAArAw==",
//   "BSCS" : "AAAAAgAAAJcAAAAQAw==",
//   "Ddata" : "AAAAAgAAAJcAAAAVAw==",
//   "PicOff" : "AAAAAQAAAAEAAAA+Aw==",
//   "Tv_Radio" : "AAAAAgAAABoAAABXAw==",
//   "Theater" : "AAAAAgAAAHcAAABgAw==",
//   "SEN" : "AAAAAgAAABoAAAB9Aw==",
//   "InternetWidgets" : "AAAAAgAAABoAAAB6Aw==",
//   "InternetVideo" : "AAAAAgAAABoAAAB5Aw==",
//   "Netflix" : "AAAAAgAAABoAAAB8Aw==",
//   "SceneSelect" : "AAAAAgAAABoAAAB4Aw==",
//   "Mode3D" : "AAAAAgAAAHcAAABNAw==",
//   "iManual" : "AAAAAgAAABoAAAB7Aw==",
//   "Audio" : "AAAAAQAAAAEAAAAXAw==",
//   "Wide" : "AAAAAgAAAKQAAAA9Aw==",
//   "Jump" : "AAAAAQAAAAEAAAA7Aw==",
//   "PAP" : "AAAAAgAAAKQAAAB3Aw==",
//   "MyEPG" : "AAAAAgAAAHcAAABrAw==",
//   "ProgramDescription" : "AAAAAgAAAJcAAAAWAw==",
//   "WriteChapter" : "AAAAAgAAAHcAAABsAw==",
//   "TrackID" : "AAAAAgAAABoAAAB+Aw==",
//   "TenKey" : "AAAAAgAAAJcAAAAMAw==",
//   "AppliCast" : "AAAAAgAAABoAAABvAw==",
//   "acTVila" : "AAAAAgAAABoAAAByAw==",
//   "DeleteVideo" : "AAAAAgAAAHcAAAAfAw==",
//   "PhotoFrame" : "AAAAAgAAABoAAABVAw==",
//   "TvPause" : "AAAAAgAAABoAAABnAw==",
//   "KeyPad" : "AAAAAgAAABoAAAB1Aw==",
//   "Media" : "AAAAAgAAAJcAAAA4Aw==",
//   "SyncMenu" : "AAAAAgAAABoAAABYAw==",
//   "Forward" : "AAAAAgAAAJcAAAAcAw==",
//   "Play" : "AAAAAgAAAJcAAAAaAw==",
//   "Rewind" : "AAAAAgAAAJcAAAAbAw==",
//   "Prev" : "AAAAAgAAAJcAAAA8Aw==",
//   "Stop" : "AAAAAgAAAJcAAAAYAw==",
//   "Next" : "AAAAAgAAAJcAAAA9Aw==",
//   "Rec" : "AAAAAgAAAJcAAAAgAw==",
//   "Pause" : "AAAAAgAAAJcAAAAZAw==",
//   "Eject" : "AAAAAgAAAJcAAABIAw==",
//   "FlashPlus" : "AAAAAgAAAJcAAAB4Aw==",
//   "FlashMinus" : "AAAAAgAAAJcAAAB5Aw==",
//   "TopMenu" : "AAAAAgAAABoAAABgAw==",
//   "PopUpMenu" : "AAAAAgAAABoAAABhAw==",
//   "RakurakuStart" : "AAAAAgAAAHcAAABqAw==",
//   "OneTouchTimeRec" : "AAAAAgAAABoAAABkAw==",
//   "OneTouchView" : "AAAAAgAAABoAAABlAw==",
//   "OneTouchRec" : "AAAAAgAAABoAAABiAw==",
//   "OneTouchStop" : "AAAAAgAAABoAAABjAw==",
//   "DUX" : "AAAAAgAAABoAAABzAw==",
//   "FootballMode" : "AAAAAgAAABoAAAB2Aw==",
//   "Social" : "AAAAAgAAABoAAAB0Aw=="
//   }

// let buttons = [
//   {'class':'button', 'command': 'Input', 'icon': 'Input'},
//   {'class':'empty', 'command': '', 'icon': ''},
//   {'class':'button green', 'command': 'PowerOff', 'icon': 'Off'},
  
//   // {'class':'section', 'command': 'media-controls', 'icon': ''},
//   {'class':'button small', 'command': 'Prev', 'icon': 'I\u25C4\u25C4'},
//   {'class':'button small', 'command': 'Pause', 'icon': 'II'},
//   {'class':'button small', 'command': 'Stop', 'icon': '\u25A0'},
//   {'class':'button small', 'command': 'Next', 'icon': '\u25B6\u25B6I'},
//   {'class':'button small', 'command': 'Rewind', 'icon': '\u25C4\u25C4'},
//   {'class':'button small', 'command': 'Rec', 'icon': '\u25CF'},
//   {'class':'button small', 'command': 'Play', 'icon': '\u25B6'},
//   {'class':'button small', 'command': 'Forward', 'icon': '\u25B6\u25B6'},
  
//   // {'class':'section', 'command': 'color-buttons', 'icon': ''},
//   {'class':'button small yellow', 'command': 'Yellow'},
//   {'class':'button small blue', 'command': 'Blue'},
//   {'class':'button small red', 'command': 'Red'},
//   {'class':'button small green', 'command': 'Green'},
  
//   // {'class':'section', 'command': 'nav-wheel', 'icon': ''},
//   {'class':'empty', 'command': ''},
//   {'class':'button', 'command': 'Up', 'icon': '\u2191'},
//   {'class':'button red', 'command': 'Netflix', 'icon': 'Netflix'},
//   {'class':'button', 'command': 'Left', 'icon': '\u2190'},
//   {'class':'button', 'command': 'Confirm', 'icon': '\u2609'},
//   {'class':'button', 'command': 'Right', 'icon': '\u2192'},
//   {'class':'button', 'command': 'Return', 'icon': 'Return'},
//   {'class':'button', 'command': 'Down', 'icon': '\u2193'},
//   {'class':'empty', 'command': '', 'icon': ''},
  
//   // {'class':'section', 'command': 'home-options', 'icon': ''},
//   {'class':'button blue', 'command': 'Home', 'icon': 'Home'},
//   {'class':'button', 'command': 'Options', 'icon': 'Options'},
//   {'class':'button', 'command': 'PicOff', 'icon': 'Pic Off'},
  
//   // {'class':'section', 'command': 'info', 'icon': ''},
//   {'class':'button small', 'command': 'KeyPad', 'icon': 'KeyPad'},
//   {'class':'button small', 'command': 'Display', 'icon': 'Display'},
//   {'class':'button small', 'command': 'GGuide', 'icon': 'Guide'},
//   {'class':'button small', 'command': 'iManual', 'icon': 'iManual'},
  
//   // {'class':'section', 'command': 'numpad', 'icon': ''},
//   {'class':'button', 'command': 'Num1', 'icon': '1'},
//   {'class':'button', 'command': 'Num2', 'icon': '2'},
//   {'class':'button', 'command': 'Num3', 'icon': '3'},
//   {'class':'button', 'command': 'Num4', 'icon': '4'},
//   {'class':'button', 'command': 'Num5', 'icon': '5'},
//   {'class':'button', 'command': 'Num6', 'icon': '6'},
//   {'class':'button', 'command': 'Num7', 'icon': '7'},
//   {'class':'button', 'command': 'Num8', 'icon': '8'},
//   {'class':'button', 'command': 'Num9', 'icon': '9'},
//   {'class':'button', 'command': 'DOT', 'icon': '.'},
//   {'class':'button', 'command': 'Num0', 'icon': '0'},
//   {'class':'button', 'command': 'ClosedCaption', 'icon': 'CC'},
  
//   // {'class':'section', 'command': 'volume-channel', 'icon': ''},
//   {'class':'empty paddleUp', 'command': '', 'icon': 'Vol'},
//   {'class':'empty paddleUp', 'command': '', 'icon': ' Ch'},
//   {'class':'button paddleUp', 'command': 'VolumeUp', 'icon': '+'},
//   {'class':'button paddleUp', 'command': 'ChannelUp', 'icon': '+'},
//   {'class':'button paddleDown', 'command': 'VolumeDown', 'icon': '-'},
//   {'class':'button paddleDown', 'command': 'ChannelDown', 'icon': '-'},
//   {'class':'button', 'command': 'Mute', 'icon': 'Mute'},
//   {'class':'button', 'command': 'Jump', 'icon': 'Jump'},
//   ]

// function wait(ms, value) {
//   return new Promise(resolve => setTimeout(resolve, ms, value));
// }

function Section(props) {
  const {code_list, buttons, settings} = useContext(RemoteContext)
  // console.log('sections receiving context', code_list, buttons)
  
//   async function sendCommand(command, delay=0, display=true) {
//     await wait(delay)
//     new Promise ((resolve) => {
//       const tv_ip = localStorage.getItem('IP')
//       // const tv_url = `http://192.168.100.100/sony/IRCC`
//       // const preshared_key = '1qqa'
//       const tv_url = `http://${tv_ip}/sony/IRCC`
//       const preshared_key = localStorage.getItem('key')
//       const code = code_list[command]
//       const data =
//       `<?xml version="1.0"?>
//       <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
//         <s:Body>
//           <u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1">
//             <IRCCCode>${code}</IRCCCode>
//           </u:X_SendIRCC>
//         </s:Body>
//       </s:Envelope>`;
//       fetch(tv_url, {
//           method: 'POST', 
//           body: data,
//           mode: 'cors',
//           headers: {
//               'Accept': '*/*',
//               'Content-Type': 'text/xml; charset=UTF-8',
//               'SOAPAction': '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"',
//               'X-Auth-PSK': preshared_key,
//           }
//       })
//       .then(response => resolve(response.status))
//       if (display == true){
//           props.setMessage(`Sent: ${command}`)
//       }
//     })
//   }

  return (
    <div className='section'>
      {buttons.map((element, i) => 
  <div 
    className={element.class + ((settings.fullViewSetting || element.compactView)? '': ' invisible')} 
    key={element.command + '_btn_' + i} 
    id={element.command} 
    onClick={element.command? () => props.sendCommand(element.command) : undefined }>{element.icon}
    {/* <div className={`add-remove ${element.compactView? '' : 'greyed'}` }>{element.compactView? '-' : '+'}</div> */}
  </div>
  )}
    </div>
  );
}

export default Section;
