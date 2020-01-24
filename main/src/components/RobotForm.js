import React, {Component} from 'react'
class RobotForm extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            type:'',
            mass:''
        }
        this.handleChange=(evt)=>{
            this.setState({
                [evt.target.name]:evt.target.value
            })
        }
        this.handleTitleChange=(evt)=>{
            this.setState({
                title:evt.target.value
            })
        }
    }
    render(){
        return <div>
        <input id="name" type="text" placeholder="name" onChange={this.handleChange} name="name"/>
         <input id="type" type="text" placeholder="type" onChange={this.handleChange} name="type"/>
         
          <input id="mass" type="text" placeholder="mass" onChange={this.handleChange} name="mass"/>
          <input type="button" values="add" onClick={()=>this.props.onAdd({
              name:this.state.name,
              type:this.state.type,
              mass:this.state.mass
          })
          }/>
          </div>
    }
}
export default RobotForm