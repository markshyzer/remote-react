import { useContext, useEffect } from 'react'
import { RemoteContext } from "../../App";


function Button({element, sendCommand, number}) {
  const {settings, setButtons, buttons} = useContext(RemoteContext)

  const handleClick = () =>{
    if (settings.displaySettings){
      let newButtons = [...buttons]
      newButtons[number].compactView = !element.compactView
      setButtons(buttons => [...newButtons])
    } else if (element.command) {
      sendCommand(element.command)
    }
  }

  return (
      <div 
        className={
          element.class + 
          (settings.displaySettings? ' edit' : ' ') +
          ((settings.fullViewSetting || element.compactView)? '': 'invisible')} 
        id={element.command} 
        onClick={handleClick}>{element.icon}
        {settings.displaySettings? <div className='inCompactIcon'>{element.compactView? '\u2705' : '\u26D4'}</div> : null }        
      </div>
      
  );
}

export default Button;

