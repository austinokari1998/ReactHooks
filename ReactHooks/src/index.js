import React,{useState, useEffect} from 'react';
import axios from 'axios';

import * as ReactDOM from 'react-dom/client'

function Bulbs(){
  const [on, seton]=useState(false);
  const lightson=()=>seton(true);
  const lightsoff=()=>seton(false);
//using of the reacthook useEffect;;
// useffect one is based on running every time the component renders
//no dependencies given 
useEffect(()=>{
  console.log("this is rerendering")

});
// two based on rerendering just once
useEffect(()=>{
  console.log("this one renders once ")
},[]);
//creation of a useEffect based on a public api   ',
const url_used='https://jsonplaceholder.typicode.com/posts';


useEffect(()=>{
  axios.get(url_used).then(response=>console.log(response.data));
}, []);
// three based on the rendering only after update
useEffect(()=>{
  console.log("this is will render once and many on ${on} update")
}, [on])
 

  return (
    <>
      <button onClick={lightson}>on</button>
      <button onClick={lightsoff}>off</button>
    </>
  );

}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bulbs/>);
export default Bulbs;

