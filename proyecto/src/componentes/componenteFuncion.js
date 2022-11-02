import React from "react";
import { useState,useEffect } from "react";

function ComponenteFuncion(){
    let [contador,setContador] = useState(0)
    useEffect(()=>{
        const intervalo =  setInterval(() => {
            setContador(contador = contador + 1)
        },1000)
        return ()=> clearInterval(intervalo)
    },[])

    return(
       <h1>Estado 2: {contador}</h1>
    )
}

function ComponenteFuncion2(){
    let [contador1, setContador1] = useState(0)
    return(
        <div>
            <h2>{contador1}</h2>
             <button onClick={()=>setContador1(contador1 = contador1 + 1)}>Contar</button>

        </div>
    )
}

export{ComponenteFuncion, ComponenteFuncion2}