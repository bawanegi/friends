import React from "react";
const Card =(props)=>
{
    return (
    <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ">
    <img  alt="robots" src={`https://robohash.org/${props.id}*4?100x100`}/>
    <div >
   <h1>{props.name}</h1>
   <h1>{props.username}</h1>
   <p>{props.email}</p>
   
    </div>
    </div>
    );
}
export default Card; 