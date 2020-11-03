import React, {useState} from 'react'

function HooksTher() {


    const [name , setName ] = useState({firstname:'' , lastname:''}) 

    return (
        <div>
            
            <form>

<input type="text" value={ ... name ,firstname} onChange={e => setName({firstname:e.target.value})}></input>
<input type="text" value={ ... name,lastname} onChange={e => setName({lastname:e.target.value})}></input>
    <h2>your firs name is {name.firstname}</h2>
    <h2>your last name is {name.lastname}</h2>

            </form>

        </div>
    )
}

export default HooksTher
