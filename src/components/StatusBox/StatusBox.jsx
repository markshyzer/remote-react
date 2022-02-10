import React, { useState, useEffect, useContext} from 'react';

function StatusBox(props) {
    const [visibility, setVisibility] = useState(false)

    useEffect(() => {
        setVisibility(true)
        setTimeout(() => {setVisibility(false)}, 3000)
      }, [props.message])

  return (  
    <div className={`empty status ${visibility ? '': 'hide'}`} id='status-box'>
        {props.message}
    </div>
  );
}

export default StatusBox;




