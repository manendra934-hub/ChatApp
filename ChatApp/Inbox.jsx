import React from 'react';
import SendIcon from '@material-ui/icons/Send';
const Inbox=({Value,setvalue,imgset,chat,setChat})=>{
   
return (
    
<div className="inboxtop">
    <div className="top-inbox">
<img src={imgset} alt=""/>
<p >{Value}</p>
</div>
<div className="background-inbox">
    {/* <img src="./images/image/i7.jpg" alt=""/> */}
   <div className="inbox-chat">{chat}</div>
</div>
<form>
<div className="input-div">
    <input type="text"  placeholder="type here..." onChange={(e)=>{setChat(e.target.value)}}/>   
    <button type="submit" ><SendIcon/></button>
</div>
</form>
</div>


)

}
export default Inbox;
