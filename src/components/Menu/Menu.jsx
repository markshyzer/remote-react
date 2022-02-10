// import './Menu.css';
import React, { useState, useContext } from 'react';
import Settings from '../Settings/Settings'
import StatusBox from '../StatusBox/StatusBox'
import { RemoteContext } from "../../App";



function Menu(props) {
    const {settings}= useContext(RemoteContext)
    // console.log('full view?', settings.fullViewSetting)

    // const [displaySettings, setDisplaySettings] = useState(false)
    // const [fullView, setFullView] = useState(true)

    function toggleDisplaySettings(){
        console.log('menu toggle')
        settings.toggleSetting('displaySettings', !settings.displaySettings)
    }

    // console.log('menu', props.message)
    function toggleFullView(){
        // setDisplaySettings(false)
        settings.toggleSetting('displaySettings', 12)
        settings.toggleSetting('fullViewSetting', !settings.fullViewSetting)
    }

  return (

    <div>
        <div className='section' id='menu'>
            <div className='empty emoji' id='settings' onClick={() => toggleDisplaySettings()}>&#9881;</div>
            {/* <div className='empty status' id='status-box'></div> */}
            <StatusBox message={props.message}/>
            <div className='empty emoji' id='full-compact' onClick={toggleFullView}> &#8286;&#8285;&#8286;</div>
        </div>
        <Settings className='section'/>
    </div>  
      
  );
}

export default Menu;


