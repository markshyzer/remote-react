import React, { useEffect, useState, useContext } from 'react';
import { RemoteContext } from "../../App";

// import './Menu.css';
// import Settings from '../Settings/Settings'

function Settings(props) {
  const {settings, code_list, buttons, setButtons} = useContext(RemoteContext)
  // setButtons((buttons) => ({...buttons, [buttons[0].id] :'doodley doo'}))
  // console.log(buttons)

  // console.log('settings receiving context ', settings)

  const [tv_ip, setIP] = useState(() =>
    window.localStorage.getItem('IP') || ''
    );
  const [preshared_key, setPresharedKey] = useState(() =>
    window.localStorage.getItem('key') || ''
    );
  const handleIpChange = (e) => setIP(e.target.value);
  const handlePresharedKeyChange = (e) => setPresharedKey(e.target.value)

  useEffect(() => {
    window.localStorage.setItem('IP', tv_ip);
    window.localStorage.setItem('key', preshared_key)
  })


  return (
    <div className={settings.displaySettings? 'visible' : 'hidden'} id='settings_menu'>
        <p>Setup</p>
        <p>Connect to your Sony TV using the device IP and pre-shared key. To find your TV's IP address press [HOME] 
            and go to Settings {'\u2192'} Network {'\u2192'} Advanced settings {'\u2192'} Network status {'\u2192'} IP address</p>
        <p>IP address:</p><input className='input-text' id='ip-input' type="text" value={tv_ip} onChange={handleIpChange}></input>
        <p>Find or set your TV's pre-shared key by going to [HOME] {'\u2192'} Settings {'\u2192'} Network {'\u2192'} Home network setup {'\u2192'} IP control {'\u2192'} Authentication / Pre-Shared Key</p>
        <p>Pre-shared key:</p><input className='input-text' id='key-input' type="text" value={preshared_key} onChange={handlePresharedKeyChange}></input>
        <p>This information will be stored in your browser for future use.</p>
        <p>Press <span className='emoji' >&#9881;</span> to close or return to this menu.</p>
        <p>Press <span className='emoji' >&#8286;&#8285;&#8286;</span> to switch between Full and Compact views</p>
        <p>Use the checkboxes below to customize which sections appear in Compact view</p>

    </div>  
      
  );
}

export default Settings;

