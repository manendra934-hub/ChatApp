import React from 'react';
import Data from './Chatdata';
const Chat=({setvalue,setImgset})=>{
       
        return(
        <div className="chatdiv">
           {Data.map((data)=>{
               return <div className="profileinfo" onClick={()=>{setvalue(data.name); setImgset(data.profileImg);}} > 
                   <img src={data.profileImg} alt=""/>
                   <p value={data.name} class="chat-p"> {data.name}</p>
                                  </div>
           })}
               
        </div>
      
)
}

export default Chat
