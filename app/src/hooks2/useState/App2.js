import React, { useEffect } from 'react'

import {useForm} from './form'

function App2() {


    const [values, handelchench] = useForm({ email: "", password: "" })
 
    // const [email , setemil ] = useState("")
    // const [password , setpassword ] = useState("")



    useEffect(()=>{

console.log('run ');


    },[values.password])

    return (


        <div>

            {/* <input  onChange={(e)=>setemil(e.target.value)}></input>
        <input  onChange={(e)=>setpassword(e.target.value)}></input>

    <p> email : {email}</p>
    <input value={password} type="password"></input> */}




            <input  name="email" type="text" value={values.email} onChange={handelchench}></input>
            <input  name="password" value={values.password} onChange={handelchench}></input>
<p>
    {values.email}


</p>
            {/* <p> email : {email}</p>
            <input value={password} type="password"></input>
 */}



        </div>
    )
}

export default App2
