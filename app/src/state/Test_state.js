import React from 'react'


export default class Test_state extends React.Component{

constructor(){
super()

this.state = {

    name:'divid',
    firstane:'escadim',
    age:11111,
    liked:{
movie:['happy','goodfather'],
languch:['us','en','tur','ir']
}


}



}


add(){
// for chencge varibels
this.setState({

name:'dsd'

})

}


render(){


return(

<div>

<p>Number : {this.state.name}</p>

<button onClick={()=>this.add()}>Add</button>
</div>

)

}






}