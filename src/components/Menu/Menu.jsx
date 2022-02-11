import React, { useContext } from 'react';
import Settings from '../Settings/Settings'
import StatusBox from '../StatusBox/StatusBox'
import { RemoteContext } from "../../App";

function Menu() {
    const {settings, message} = useContext(RemoteContext)

    function toggleDisplaySettings(){
        settings.toggleSetting('displaySettings', !settings.displaySettings)
    }

    function toggleFullView(){
        settings.toggleSetting('displaySettings', 12)
        settings.toggleSetting('fullViewSetting', !settings.fullViewSetting)
    }

  return (
    <div>
        <div className='section' id='menu'>
            <div className='empty emoji' id='settings' onClick={() => toggleDisplaySettings()}>&#9881;</div>
            <StatusBox message={message}/>
            <div className='empty emoji' id='full-compact' onClick={toggleFullView}> &#8286;&#8285;&#8286;</div>
        </div>
        <Settings className='section'/>
    </div>  
      
  );
}

export default Menu;


