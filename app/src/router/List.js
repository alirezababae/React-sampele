import React, {useState , useEffect} from 'react'


function List() {

useEffect(()=>{

    fetchitms()
    
},[])

    const fetchitms = async()=>{

const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')



const items = await data.json()
console.log(items);


    }



    return (
        <div>
            
        </div>
    )
}

export default List

