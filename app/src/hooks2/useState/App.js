import React , {useState} from 'react'

function App() {

    const [count , setcount ] = useState(10) 


    const [  {count1 , count2} , setcountall  ] = useState({count1:2 , count2: 8 })


    return (
        <div>
            <button onClick={()=>setcount(count=>count + 1)}>+</button>

    <p3>{count}</p3>


    <div>
<p>cont 2</p>


<button onClick={ ()=>{ count(e=>e+1); count2(e=>e+1)

} } >+</button>

    <h2> {count1}  and {count2}</h2>

    </div>

        </div>
    )
}

export default App
