import React from "react";
const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */
// export function ShowPlanets(){
//    return( 
//     <ul>
// {planets.map((e,i)=>{
//     <li key={i}>{e}</li>
// })}
//     </ul>
//     )
// }


// 2) Add the array planetsInHTML inside the innerHTML of this <ul>
const content = (<ul className="list-group m-5"></ul>);
export function ShowPlanets({planets}){
       return( 
        <ul className="list-group m-5">
    {planets.map((e,i)=>{
        <li key={i}>{e}</li>
    })}
        </ul>
        )
    }