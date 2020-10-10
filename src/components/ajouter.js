import React, { Component } from 'react';
import {connect} from 'react-redux';
import Menu from './menu.js'
const st={
    margin: '10px 20px ',
    padding: 23, 
    margin: '20px', 
    width: 350,      
}
const style = {
    padding: '9px 175px',
  width: 110,
  display: 'block',
  margin: '20px ',
  fontSize: '15px',
  
  }
  const tab={
padding:'60px 500px',
}
class Formulaire extends Component {
render() {
    return (<div>
    <Menu/>
        <div style={tab} class="form-group col-md-2">
            
        <input name="a" style={st} type="text" class="form-control" onChange={(e)=>{this.props.hundelChange(e.target)}}/>
        <input name="b" style={st} type="text" class="form-control"  onChange={(a)=>{this.props.hundelChange(a.target)}}/>
        <input  name="c" style={st} type="text" class="form-control" onChange={(e)=>{this.props.hundelChange(e.target)}}/>
        <input  name="d" style={st} type="text" class="form-control" onChange={(e)=>{this.props.hundelChange(e.target)}}/>
        <button style={style} class="btn btn-success" onClick={()=>{this.props.add(this.props.input)}}>Add</button>
      </div></div>
      
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
    return {
      hundelChange:(target)=>{
        dispatch ({type:'SET_INPUT',value:target.value})
      },
      add:(input)=>{
        let obj={}
        let inputValue=input
        obj={inputValue}
        dispatch ({type:'ADD_INPUT',value:obj})
      }
    }
    }
    const mapStateToProps=(state)=>{
      return{
        input:state.input
      }
    }
    export default connect(mapStateToProps,mapDispatchToProps) (Formulaire);
