import React, { Component } from 'react';
import {connect} from 'react-redux'
import {BrowserRouter, Route } from "react-router-dom"

const style = {
    padding: '9px 20px',
  width: 140,
  display: 'block',
  margin: '95px ',
  fontSize: '16px',
  
  }
  const st={
      margin: '100px  ',
      padding: 20,        
  }
  const tab={

  }
class Add extends Component {
  render() { 
    return (  
        <div align>
        <table >
            <tr>
      <td ><input style={st} type="text" onChange={(e)=>{this.props.hundelChange(e.target)}} class="form-control" placeholder="Search by name"/> </td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>

    <td> <button style={style} class="btn btn-success">Add</button></td>
      </tr>
      </table>
      
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>     
      <td>Sii</td>
      <td><a href="">Gestion Compétences</a></td>
      <td><button type="button" class="btn btn-warning">Modifier</button></td>
      <td><button type="button" class="btn btn-danger">Supprimer</button></td>
    </tr>
    
   
  </tbody>
</table>
    </div>
    );
  }
}
export default Add