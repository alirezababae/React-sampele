import  {useState} from 'react'

export const useForm = (initvalue)=>{


// const [email , setemail] = useState(initvalue)
const [values , setvalues] = useState(initvalue)

return [ values ,
     e =>{
    setvalues({
 ...values,
 [e.target.name]:e.target.value

    })
} ]


}