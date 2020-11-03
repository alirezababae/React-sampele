import React, {useState} from 'react'

function Hookscontertow() {

    const initziro = 0

    const [count , setcount ] = useState(initziro)

    return (
        <div>
            Count : {count}

            <button onClick={()=>setcount(initziro)}>Rest</button>
            <button onClick={()=>setcount(count + 1)}>Add</button>
            <button onClick={()=>setcount(count - 1)}>maines</button>


        </div>
    )
}

export default Hookscontertow
