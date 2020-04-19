import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown:[{ref:"/department?dep=marketing",titel:"Marketing & amp PR"},{ref: "/department?dep=customer",title:"ustomer Success "},{ref:"/department?dep=it",title:"IT, Product, Design & amp; UX, Data "},{ref:"/department?dep=finance",title: "Finance & amp; Administration"},{ref:"/department?dep=hr" ,title:"HR & amp; more "}],
            menu:[{styl:"title1-menu",titre:"About us"},{styl:"title2-menu",titre:"Career"},{styl:"title3-menu",titre:"Departements"}],
            
        }
    }
    render() {
        return ( <div className = "header-menu" >
            <a href = "/" >
            <img className = "logo-docplanner" src = "https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt = "Docplanner Group" />
            </a>
             <nav className = "nav-bar-menu" >
            <ul className = "nav-bar-menu-content" >
            {this.state.menu.map(el=>(el.titre!=="Departements")?
            < li  > <a href = "" className = {el.styl} > {el.titre} </a> </li>:
             <li className = {el.styl}  > {el.titre}  
             <div className = "dropdown-content" >
            <ul>
            {this.state.dropdown.map(el=>  <li> <a className = "link1-dropdown-menu" href = {el.ref} > {el.title} </a></li>)}
          
            </ul>
             </div>

            </li>)}
            </ul> 
            </nav>
             </div>);
    
    }
}
    export default Header;
    