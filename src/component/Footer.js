import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            menu:[{styl:"link-footer",ref1:"//www.znanylekarz.pl",title1:"Poland"},{styl:"link-footer",ref2:"//www.doktortakvimi.com",title2:"Turkey"},
            {styl:"link-footer",ref3:"//www.doctoralia.es",title3:"Spain"}, {styl:"link-footer",ref4:"//www.miodottore.it",title4:"Italy"},
            {styl:"link-footer",ref5:"//www.znamylekar.cz",title5:"Czech Republic"}, {styl:"link-footer",ref6:"//www.doctoralia.com.mx",title6:"Mexico"},
            {styl:"link-footer",ref8:"//www.doctoralia.es",title8:"Colombia"}, {styl:"link-footer",ref8:"http://www.doctoralia.com.b",title8:"Brazil"},
            {styl:"link-footer",ref9:"http://www.doctoraliar.com",title9:"Argentina"}, {styl:"link-footer",ref10:"http://www.doctoralia.cl",title10:"Chile"}],
        }
    }
    render() {
    return ( < div style={{textAlign:"center"}} className="main-footer">
       
            <p className="p-footer">We are leaders in 10 countries:
            {this.state.menu.map(el=>  <a className={el.styl} href={el.ref1} target="_blank">{el.title1}</a>)},
            {this.state.menu.map(el=> <a className={el.styl} href={el.ref2} target="_blank">{el.title2}</a>)},
            {this.state.menu.map(el=><a className={el.styl} href={el.ref3} target="_blank">{el.title3}</a>)},
            {this.state.menu.map(el=> <a className={el.styl} href={el.ref4} target="_blank">{el.title4}</a>)},
            {this.state.menu.map(el=> <a className={el.styl} href={el.ref5} target="_blank">{el.title5}</a>)},
            {this.state.menu.map(el=><a className={el.styl} href={el.ref6} target="_blank">{el.title6}</a>)},
            {this.state.menu.map(el=><a className={el.styl} href={el.ref7} target="_blank">{el.title7}</a>)},
            {this.state.menu.map(el=><a  className={el.styl} href={el.ref8} target="_blank">{el.title8}</a>)},
            {this.state.menu.map(el=><a className={el.styl} href={el.ref9} target="_blank">{el.title9}</a>)}
                and
                {this.state.menu.map(el=> <a className={el.styl} href={el.ref10} target="_blank">{el.title10}</a>)}
            </p>
            <p className="p-footer">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
    
            www.docplanner.com © 2020
        
          </div>
        
    )};
}
export default Footer;