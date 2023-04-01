import { useEffect, useState } from "react";

const Settings = () => {
    useEffect(() => {
        document.title = 'Settings';
        
      }, []);

      let [color, setColor] = useState('green')
      
    return (
        <div>
            <div className="d-flex justify-content-center"> 
                <div className ='m-5' style = {{backgroundColor: color, height: '100px', width: '100px'}}></div>
                <div className =' m-5' style = {{backgroundColor: color, height: '100px', width: '100px'}}></div>
                <div className =' m-5' style = {{backgroundColor: color, height: '100px', width: '100px'}}></div>
                <div className ='m-5' style = {{backgroundColor: color, height: '100px', width: '100px'}}></div>
            </div>
            <div className="d-flex justify-content-center">
                <div 
                    className ='m-5' 
                    style = {{backgroundColor: 'green', height: '50px', width: '50px'}}
                    onClick = {() => setColor('green')}
                />
                <div 
                    className ='m-5' 
                    style = {{backgroundColor: 'red', height: '50px', width: '50px'}}
                    onClick = {() => setColor('red')}
                />
                <div 
                    className ='m-5' 
                    style = {{backgroundColor: 'yellow', height: '50px', width: '50px'}}
                    onClick = {() => setColor('yellow')}
                />
                <div 
                    className ='m-5' 
                    style = {{backgroundColor: 'purple', height: '50px', width: '50px'}}
                    onClick = {() => setColor('purple')}
                />
                </div>
        </div>
    )
}

export default Settings;