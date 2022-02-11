import React, { useState, useEffect, useContext} from 'react';
import { RemoteContext } from "../../App";


function StatusBox() {
    const {message, setMessage} = useContext(RemoteContext)
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
        setVisibility(true)
        setTimeout(setVisibility, 3000, false)
      }, [message])

  return (  
    <div className={`empty status ${visibility ? '': 'hide'}`} id='status-box'>
        {message}
    </div>
  );
}

export default StatusBox;




