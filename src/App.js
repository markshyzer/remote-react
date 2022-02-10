import React, { useEffect, useState, useContext } from 'react';
import Remote from './components/Remote/Remote';
import './App.css';
// import { RemoteContextProvider } from './Context'
// import Greeting from './Greeting'


const RemoteContext = React.createContext()

const RemoteContextProvider = (props) => {
  const viewSettings = {
    fullViewSetting: true,
    displaySettings: false,
    toggleSetting: (property, value) => {
      // console.log('Toggle Triggered')
      setSettings(
        {...settings, [property]: value}
      );
    }
  }
  const [settings, setSettings] = useState(viewSettings)
  const code_list = {
    "PowerOff" : "AAAAAQAAAAEAAAAvAw==",
    "Input" : "AAAAAQAAAAEAAAAlAw==",
    "GGuide" : "AAAAAQAAAAEAAAAOAw==",
    "EPG" : "AAAAAgAAAKQAAABbAw==",
    "Favorites" : "AAAAAgAAAHcAAAB2Aw==",
    "Display" : "AAAAAQAAAAEAAAA6Aw==",
    "Home" : "AAAAAQAAAAEAAABgAw==",
    "Options" : "AAAAAgAAAJcAAAA2Aw==",
    "Return" : "AAAAAgAAAJcAAAAjAw==",
    "Up" : "AAAAAQAAAAEAAAB0Aw==",
    "Down" : "AAAAAQAAAAEAAAB1Aw==",
    "Right" : "AAAAAQAAAAEAAAAzAw==",
    "Left" : "AAAAAQAAAAEAAAA0Aw==",
    "Confirm" : "AAAAAQAAAAEAAABlAw==",
    "Red" : "AAAAAgAAAJcAAAAlAw==",
    "Green" : "AAAAAgAAAJcAAAAmAw==",
    "Yellow" : "AAAAAgAAAJcAAAAnAw==",
    "Blue" : "AAAAAgAAAJcAAAAkAw==",
    "Num1" : "AAAAAQAAAAEAAAAAAw==",
    "Num2" : "AAAAAQAAAAEAAAABAw==",
    "Num3" : "AAAAAQAAAAEAAAACAw==",
    "Num4" : "AAAAAQAAAAEAAAADAw==",
    "Num5" : "AAAAAQAAAAEAAAAEAw==",
    "Num6" : "AAAAAQAAAAEAAAAFAw==",
    "Num7" : "AAAAAQAAAAEAAAAGAw==",
    "Num8" : "AAAAAQAAAAEAAAAHAw==",
    "Num9" : "AAAAAQAAAAEAAAAIAw==",
    "Num0" : "AAAAAQAAAAEAAAAJAw==",
    "Num11" : "AAAAAQAAAAEAAAAKAw==",
    "Num12" : "AAAAAQAAAAEAAAALAw==",
    "VolumeUp" : "AAAAAQAAAAEAAAASAw==",
    "VolumeDown" : "AAAAAQAAAAEAAAATAw==",
    "Mute" : "AAAAAQAAAAEAAAAUAw==",
    "ChannelUp" : "AAAAAQAAAAEAAAAQAw==",
    "ChannelDown" : "AAAAAQAAAAEAAAARAw==",
    "SubTitle" : "AAAAAgAAAJcAAAAoAw==",
    "ClosedCaption" : "AAAAAgAAAKQAAAAQAw==",
    "Enter" : "AAAAAQAAAAEAAAALAw==",
    "DOT" : "AAAAAgAAAJcAAAAdAw==",
    "Analog" : "AAAAAgAAAHcAAAANAw==",
    "Teletext" : "AAAAAQAAAAEAAAA/Aw==",
    "Exit" : "AAAAAQAAAAEAAABjAw==",
    "Analog2" : "AAAAAQAAAAEAAAA4Aw==",
    "*AD" : "AAAAAgAAABoAAAA7Aw==",
    "Digital" : "AAAAAgAAAJcAAAAyAw==",
    "Analog?" : "AAAAAgAAAJcAAAAuAw==",
    "BS" : "AAAAAgAAAJcAAAAsAw==",
    "CS" : "AAAAAgAAAJcAAAArAw==",
    "BSCS" : "AAAAAgAAAJcAAAAQAw==",
    "Ddata" : "AAAAAgAAAJcAAAAVAw==",
    "PicOff" : "AAAAAQAAAAEAAAA+Aw==",
    "Tv_Radio" : "AAAAAgAAABoAAABXAw==",
    "Theater" : "AAAAAgAAAHcAAABgAw==",
    "SEN" : "AAAAAgAAABoAAAB9Aw==",
    "InternetWidgets" : "AAAAAgAAABoAAAB6Aw==",
    "InternetVideo" : "AAAAAgAAABoAAAB5Aw==",
    "Netflix" : "AAAAAgAAABoAAAB8Aw==",
    "SceneSelect" : "AAAAAgAAABoAAAB4Aw==",
    "Mode3D" : "AAAAAgAAAHcAAABNAw==",
    "iManual" : "AAAAAgAAABoAAAB7Aw==",
    "Audio" : "AAAAAQAAAAEAAAAXAw==",
    "Wide" : "AAAAAgAAAKQAAAA9Aw==",
    "Jump" : "AAAAAQAAAAEAAAA7Aw==",
    "PAP" : "AAAAAgAAAKQAAAB3Aw==",
    "MyEPG" : "AAAAAgAAAHcAAABrAw==",
    "ProgramDescription" : "AAAAAgAAAJcAAAAWAw==",
    "WriteChapter" : "AAAAAgAAAHcAAABsAw==",
    "TrackID" : "AAAAAgAAABoAAAB+Aw==",
    "TenKey" : "AAAAAgAAAJcAAAAMAw==",
    "AppliCast" : "AAAAAgAAABoAAABvAw==",
    "acTVila" : "AAAAAgAAABoAAAByAw==",
    "DeleteVideo" : "AAAAAgAAAHcAAAAfAw==",
    "PhotoFrame" : "AAAAAgAAABoAAABVAw==",
    "TvPause" : "AAAAAgAAABoAAABnAw==",
    "KeyPad" : "AAAAAgAAABoAAAB1Aw==",
    "Media" : "AAAAAgAAAJcAAAA4Aw==",
    "SyncMenu" : "AAAAAgAAABoAAABYAw==",
    "Forward" : "AAAAAgAAAJcAAAAcAw==",
    "Play" : "AAAAAgAAAJcAAAAaAw==",
    "Rewind" : "AAAAAgAAAJcAAAAbAw==",
    "Prev" : "AAAAAgAAAJcAAAA8Aw==",
    "Stop" : "AAAAAgAAAJcAAAAYAw==",
    "Next" : "AAAAAgAAAJcAAAA9Aw==",
    "Rec" : "AAAAAgAAAJcAAAAgAw==",
    "Pause" : "AAAAAgAAAJcAAAAZAw==",
    "Eject" : "AAAAAgAAAJcAAABIAw==",
    "FlashPlus" : "AAAAAgAAAJcAAAB4Aw==",
    "FlashMinus" : "AAAAAgAAAJcAAAB5Aw==",
    "TopMenu" : "AAAAAgAAABoAAABgAw==",
    "PopUpMenu" : "AAAAAgAAABoAAABhAw==",
    "RakurakuStart" : "AAAAAgAAAHcAAABqAw==",
    "OneTouchTimeRec" : "AAAAAgAAABoAAABkAw==",
    "OneTouchView" : "AAAAAgAAABoAAABlAw==",
    "OneTouchRec" : "AAAAAgAAABoAAABiAw==",
    "OneTouchStop" : "AAAAAgAAABoAAABjAw==",
    "DUX" : "AAAAAgAAABoAAABzAw==",
    "FootballMode" : "AAAAAgAAABoAAAB2Aw==",
    "Social" : "AAAAAgAAABoAAAB0Aw=="
    }

  let standardButtons = [
    {'class':'button', 'command': 'Input', 'icon': 'Input', 'compactView' : true},
    {'class':'empty', 'command': '', 'icon': '', 'compactView' : true},
    {'class':'button green', 'command': 'PowerOff', 'icon': 'Off', 'compactView' : false},
    // {'class':'section', 'command': 'media-controls', 'icon': '', 'compactView' : true},
    {'class':'button small', 'command': 'Prev', 'icon': 'I\u25C4\u25C4', 'compactView' : true},
    {'class':'button small', 'command': 'Pause', 'icon': 'II', 'compactView' : true},
    {'class':'button small', 'command': 'Stop', 'icon': '\u25A0', 'compactView' : true},
    {'class':'button small', 'command': 'Next', 'icon': '\u25B6\u25B6I', 'compactView' : true},
    {'class':'button small', 'command': 'Rewind', 'icon': '\u25C4\u25C4', 'compactView' : true},
    {'class':'button small', 'command': 'Rec', 'icon': '\u25CF', 'compactView' : true},
    {'class':'button small', 'command': 'Play', 'icon': '\u25B6', 'compactView' : true},
    {'class':'button small', 'command': 'Forward', 'icon': '\u25B6\u25B6', 'compactView' : true},
    // {'class':'section', 'command': 'color-buttons', 'icon': '', 'compactView' : true},
    {'class':'button small yellow', 'command': 'Yellow', 'compactView' : false},
    {'class':'button small blue', 'command': 'Blue', 'compactView' : false},
    {'class':'button small red', 'command': 'Red', 'compactView' : false},
    {'class':'button small green', 'command': 'Green', 'compactView' : false},
    // {'class':'section', 'command': 'nav-wheel', 'icon': '', 'compactView' : true},
    {'class':'empty', 'command': '', 'compactView' : true},
    {'class':'button', 'command': 'Up', 'icon': '\u2191', 'compactView' : true},
    {'class':'button red', 'command': 'Netflix', 'icon': 'Netflix', 'compactView' : true},
    {'class':'button', 'command': 'Left', 'icon': '\u2190', 'compactView' : true},
    {'class':'button', 'command': 'Confirm', 'icon': '\u2609', 'compactView' : true},
    {'class':'button', 'command': 'Right', 'icon': '\u2192', 'compactView' : true},
    {'class':'button', 'command': 'Return', 'icon': 'Return', 'compactView' : true},
    {'class':'button', 'command': 'Down', 'icon': '\u2193', 'compactView' : true},
    {'class':'empty', 'command': '', 'icon': '', 'compactView' : true},
    // {'class':'section', 'command': 'home-options', 'icon': '', 'compactView' : true},
    {'class':'button blue', 'command': 'Home', 'icon': 'Home', 'compactView' : true},
    {'class':'button', 'command': 'Options', 'icon': 'Options', 'compactView' : true},
    {'class':'button', 'command': 'PicOff', 'icon': 'Pic Off', 'compactView' : true},
    // {'class':'section', 'command': 'info', 'icon': '', 'compactView' : true},
    {'class':'button small', 'command': 'KeyPad', 'icon': 'KeyPad', 'compactView' : true},
    {'class':'button small', 'command': 'Display', 'icon': 'Display', 'compactView' : true},
    {'class':'button small', 'command': 'GGuide', 'icon': 'Guide', 'compactView' : true},
    {'class':'button small', 'command': 'iManual', 'icon': 'iManual', 'compactView' : true},
    // {'class':'section', 'command': 'numpad', 'icon': '', 'compactView' : true},
    {'class':'button', 'command': 'Num1', 'icon': '1', 'compactView' : true},
    {'class':'button', 'command': 'Num2', 'icon': '2', 'compactView' : true},
    {'class':'button', 'command': 'Num3', 'icon': '3', 'compactView' : true},
    {'class':'button', 'command': 'Num4', 'icon': '4', 'compactView' : true},
    {'class':'button', 'command': 'Num5', 'icon': '5', 'compactView' : true},
    {'class':'button', 'command': 'Num6', 'icon': '6', 'compactView' : true},
    {'class':'button', 'command': 'Num7', 'icon': '7', 'compactView' : true},
    {'class':'button', 'command': 'Num8', 'icon': '8', 'compactView' : true},
    {'class':'button', 'command': 'Num9', 'icon': '9', 'compactView' : true},
    {'class':'button', 'command': 'DOT', 'icon': '.', 'compactView' : true},
    {'class':'button', 'command': 'Num0', 'icon': '0', 'compactView' : true},
    {'class':'button', 'command': 'ClosedCaption', 'icon': 'CC', 'compactView' : true},
    // {'class':'section', 'command': 'volume-channel', 'icon': '', 'compactView' : true},
    {'class':'empty paddleUp', 'command': '', 'icon': 'Vol', 'compactView' : true},
    {'class':'empty paddleUp', 'command': '', 'icon': ' Ch', 'compactView' : true},
    {'class':'button paddleUp', 'command': 'VolumeUp', 'icon': '+', 'compactView' : true},
    {'class':'button paddleUp', 'command': 'ChannelUp', 'icon': '+', 'compactView' : true},
    {'class':'button paddleDown', 'command': 'VolumeDown', 'icon': '-', 'compactView' : true},
    {'class':'button paddleDown', 'command': 'ChannelDown', 'icon': '-', 'compactView' : true},
    {'class':'button', 'command': 'Mute', 'icon': 'Mute', 'compactView' : true},
    {'class':'button', 'command': 'Jump', 'icon': 'Jump', 'compactView' : true},
    ]
  
    let [buttons, setButtons] = useState(standardButtons)

  // console.log('SETTINGS', settings)
  return (
    <RemoteContext.Provider value={{settings, code_list, buttons, setButtons}}>
      {props.children}
    </RemoteContext.Provider>
  )
}




function App() {
  // const acontext = useContext(Context)
  // console.log('context', acontext.fullView)
  const [message, setMessage] = useState()

  // console.log(message)
  return (
    <div>
      <RemoteContextProvider>
        <Remote message={message} setMessage={setMessage}/>
      </RemoteContextProvider>
    {/* <Greeting /> */}
    </div>
  );
}

export default App;
export {RemoteContext}

