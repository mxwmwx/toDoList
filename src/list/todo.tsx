import * as React from 'react'
import { relative, isAbsolute } from 'path';
export default class App extends React.Component<any,any>{
  state={
      list:[],
      doneList:[]
  }

     render(){
        if(this.props.toDoList!=null){
            this.state.list=this.props.toDoList;
        return(
            <div style={{width:"400px",height:"auto",margin:"10px 30%",border:"1px solid black",borderRadius:"15px"}}>
                <p style={{color:"red",fontSize:"30px",fontWeight:900}}>待办事项：<i>{this.state.list.length}</i></p>
                <ul style={{listStyle:"none"}}>
                 {this.state.list.map((item,i)=>{
                     return <li key={i} style={{height:"32px",background:"#fff",border:"1px solid wheat"}}>
                     <input type="checkbox" style={{width:"20px",height:"20px"}} checked={false} value={item} onChange={()=> this.changeItem(item)}/>
                     <i style={{fontSize:"20px"}}>{item}</i>
                     <button style={{position:'absolute',backgroundColor:"red",height:"24px",width:"50px",right:"40%",marginTop:"5px"}} onClick={()=>this.remove(i)}>删除</button>
                     </li>
                 })}
                </ul>
            </div>
        )        
    }
}
  changeItem(item){
      for(var i=0;i<this.props.toDoList.length;i++){
          if(this.props.toDoList[i]==item){
              this.setState({
                  list:this.props.toDoList.splice(i,1)
              })
          }
      }
    this.state.doneList.push(item);
    // this.setState({
    //     list:this.props.toDoList.pop(item)
    // })
     this.props.reMes(this.state.doneList)
  }
  remove(i){
    this.setState({
        list:this.props.toDoList.splice(i,1)
    })
  }
}