import React, { Component } from 'react';

class Menu extends Component{
    render(){
        return(
       
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><b>SII MAROC</b></a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Collaborateurs</a></li>
      <li><a href="#">Compétences</a></li>
      <li><a href="#">Matrice Compétences</a></li>
      <li><a href="#">Seuil équipe</a></li>
    </ul>
  </div>
</nav>

);
}
}
export default Menu;