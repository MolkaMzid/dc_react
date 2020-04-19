import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            menu:[{styl:"link-footer",ref1:"//www.znanylekarz.pl",title1:"Poland"},{styl:"link-footer",ref1:"//www.doktortakvimi.com",title1:"Turkey"},
            {styl:"link-footer",ref1:"//www.doctoralia.es",title1:"Spain"}, {styl:"link-footer",ref1:"//www.miodottore.it",title1:"Italy"},
            {styl:"link-footer",ref1:"//www.znamylekar.cz",title1:"Czech Republic"}, {styl:"link-footer",ref1:"//www.doctoralia.com.mx",title1:"Mexico"},
            {styl:"link-footer",ref1:"//www.doctoralia.es",title1:"Colombia"}, {styl:"link-footer",ref1:"http://www.doctoralia.com.b",title1:"Brazil"},
            {styl:"link-footer",ref1:"http://www.doctoraliar.com",title1:"Argentina"}, {styl:"link-footer",ref1:"http://www.doctoralia.cl",title1:"Chile"}],
        }
    }
    render() {
    return ( < div style={{textAlign:"center"}} className="main-footer">
       
            <p className="p-footer">We are leaders in 10 countries:
            {this.state.menu.map(el=> <a className={el.styl} href={el.ref1} target="_blank">{el.title1},</a>)}</p>
            <p className="p-footer">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
    
            www.docplanner.com © 2020
        
          </div>
        
    )};
}
export default Footer;