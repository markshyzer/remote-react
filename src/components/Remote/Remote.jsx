import './Remote.css';
import Section from '../Section/Section';
import Menu from '../Menu/Menu';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import React, {useContext} from 'react'
import { RemoteContext } from "../../App";


function Remote(props) {
  const {code_list, buttons, message, setMessage}= useContext(RemoteContext)

  function wait(ms, value) {
    return new Promise(resolve => setTimeout(resolve, ms, value));
  }
    
  async function sendCommand(command, delay=350, display=true) {
    await wait(delay)
    new Promise ((resolve) => {
      const tv_ip = localStorage.getItem('IP')
      const tv_url = `http://${tv_ip}/sony/IRCC`
      const preshared_key = localStorage.getItem('key')
      const code = code_list[command]
      const data =
      `<?xml version="1.0"?>
      <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
        <s:Body>
          <u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1">
            <IRCCCode>${code}</IRCCCode>
          </u:X_SendIRCC>
        </s:Body>
      </s:Envelope>`;
      fetch(tv_url, {
          method: 'POST', 
          body: data,
          mode: 'cors',
          headers: {
              'Accept': '*/*',
              'Content-Type': 'text/xml; charset=UTF-8',
              'SOAPAction': '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"',
              'X-Auth-PSK': preshared_key,
          }
      })
      .then(response => resolve(response.status))
      if (display == true){
        setMessage(`Sent: ${command}`)
      }
    })
  }

  return (
    <div className='remote'>
      <Menu/>
      <div className='section'>
        {buttons.map((element, i) => 
          <Button 
          element={element}
          key={element.command+i} 
          sendCommand={sendCommand} 
          number={i}
          />
        )}  
      </div>
      <TextInput sendCommand={sendCommand}/>
    </div>
      
  );
}

export default Remote;