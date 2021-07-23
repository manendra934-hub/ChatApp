import React, { useState } from 'react';
import Navbar from './NavBar';
import './chatapp.css';
import Chat from './Chat'
import Inbox from './Inbox';
const App = ()=>{
    const [Value,setvalue]=useState("Manendra");
    const [imgset,setImgset]= useState("./images/image/s7.jpg");
    const [chat,setChat]=useState("");


    return(
        <>
        
        <Navbar/>
     <div className="flex">
        <Chat setvalue={setvalue} setImgset={setImgset} />
        <Inbox Value={Value} setvalue={setvalue} imgset={imgset} chat={chat} setChat={setChat}/>
    
        </div>
        
        
        </>
    )
}
export default App;