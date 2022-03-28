import { useState, useEffect } from "react";
function CodeBreak() {
    const [theCode, setCode] = useState([])
    
    function getRandomInt() {
        return Math.floor(Math.random() * 9);
    }

    useEffect(()=>{
        for(let i = 0; i < 5; i++ ){
            setCode(theCode => [...theCode, getRandomInt()])
        }
    },[])


    return(
        <div>
            <h1>{theCode}</h1>
        </div>
    )

}

export default CodeBreak