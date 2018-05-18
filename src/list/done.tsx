import * as React from 'react'

export default class App extends React.Component<any,any>{
    state={
        havedone:[],
        todo:[]
    }
    render(){
        if(this.props.doneList!=null){
            this.state.havedone=this.props.doneList;
        }
        return(
            <div style={{width:"400px",height:"auto",margin:"20px 30%",border:"1px solid black",borderRadius:"15px"}}>
            <p style={{color:"red",fontSize:"30px",fontWeight:900}}>已经完成：{this.state.havedone.length}</p>
            <ul style={{listStyle:"none"}}>
            {this.state.havedone.map((item,i)=>{
                return <li key={i} style={{height:"32px",background:"grey",border:"1px solid wheat" }}>
                <input type="checkbox" checked style={{width:"20px",height:"20px"}} value={item} onChange={()=> this.changeItem(item)}/>
                <i style={{fontSize:"20px"}}>{item} </i>
                <button style={{position:'absolute',backgroundColor:"red",height:"24px",width:"50px",right:"40%",marginTop:"5px"}} onClick={()=>this.remove(i)}>删除</button>
                </li>
            })}
            </ul>
        </div>
        )
    }
    changeItem(item){
        for(var i=0;i<this.props.doneList.length;i++){
            if(this.props.doneList[i]==item){
                this.setState({
                    havedone:this.props.doneList.splice(i,1)
                })
            }
        }
        // this.setState({
        //     havedone:this.props.doneList.pop(item)
        // })
        this.state.todo.push(item);
        this.props.fromMes(this.state.todo)
    }
    remove(i){
        this.setState({
            list:this.props.doneList.splice(i,1)
        })
      }
}