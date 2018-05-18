import * as React from 'react'

export default class App extends React.Component<any,any>{
    state={
        list:[]
    }
    input;
    render(){
        return(
            <div style={{width:"100%",height:"70px",backgroundColor:"black",margin:"0px 0px",borderRadius:"20px"}}>
               <p ><i style={{color:"white",fontSize:"40px",margin:"0 15%",fontWeight:900}}>TodoList</i>
                   <i >
                   <input type="text" ref={e=> this.input =e}  
                   style={{width:"300px",height:"30px",borderRadius:"7px",paddingLeft:"20px"}}
                  onKeyUp={this.onKeyup.bind(this)}/>
                   </i>
               </p>
               
            </div>
        )
    }
    onKeyup = (e) =>{
       if( e.keyCode==13)//&&this.handler(e)
       {
           this.state.list.push(this.input.value)
           this.props.handlMes(this.state.list)
        //  console.log(this.input.value)
       }

    }
    // handler = (e) =>{
    //     //console.log(this.input.value)
    //     this.handlMes(e)
    // }
    // handlMes(e){
    //    this.props.hanlMes(this.e.value)
    // }
}