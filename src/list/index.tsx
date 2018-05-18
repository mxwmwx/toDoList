import * as React from 'react'
import Input from './input'
import Todo from './todo'
import Done from './done' 

export default class App extends React.Component<any,any>{
    state={
        toDoList:[],
        doneList:[],
    }
  
   handlMes(value){
       this.setState(
           {toDoList:value}
       )
   }
   resMes(value){
       this.setState({
           doneList:value
       })
   }
   fromMes(value){
       this.setState({
           toDoList:value
       })
   }
    render(){
        return(
            <div style={{border:"1px solid black",width:"90%",height:"auto",margin:"10px 5%"}}>
             <Input handlMes={this.handlMes.bind(this)}/>
             <Todo toDoList={this.state.toDoList} reMes={this.resMes.bind(this)}/>
             <Done doneList={this.state.doneList} fromMes={this.fromMes.bind(this)}/>
            </div>
        )
    }
}