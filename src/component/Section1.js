import React, { Component } from 'react';
class Section1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[{ref1:"http://www.doctoraliar.com",titel1:"Argentina"},{ref2: "http://www.doctoralia.com.au",title2:"Australia "}
            ,{ref3:"http://www.doctoralia.com.br",title3:"Brazil "},{ref4:"http://www.doctoralia.cl",title4: "Chile"},{ref5:"/http://www.doctoralia.co" ,title5:"Colombia"}
            ,{ref6:"http://www.znamylekar.cz",title6:"Czech"},{ref7:"http://www.doctoralia-fr.com",title7: "France"},{ref8:"http://www.miodottore.it" ,title8:"Italy"}
            ,{ref9:"http://www.doctoralia.com.mx",title9:"Mexico"},{ref10:"http://www.doctoralia.pe",title10: "Peru"},{ref11:"http://www.znanylekarz.pl" ,title11:"Poland"}
            ,{ref12:"http://www.doctoralia.com.pt",title12:"Portugal"},{ref13:"http://www.doctoralia.es",title13: "Spain"},{ref14:"http://www.doktortakvimi.com" ,title14:"Turkey"}
            ,{ref15:"http://www.doctoralia.co.uk" ,title15:"UK"}],
            menu:[{styl1:"title1-sous1-section2",titre1:"For patients"},{styl2:"title2-sous1-section2",titre2:"Find a doctor, book a visit and solve any health-related doubt"}
            ,{styl3:"title1-sous1-section2",titre3:"For doctors"},{styl4:"title2-sous1-section2",titre4:"Save time managing visits and cut no-shows by half"}],
            
        }
    }
    render() {
        return ( <section className="section2">
        <div className="sous1-section2">
        
        {this.state.menu.map(el=><h2 className={el.styl1}>{el.titre1}</h2>)}
        {this.state.menu.map(el=><h1 className={el.styl2}>{el.titre2}</h1>)}

        <div>
            <div className="style-select">
                <select  className="style-select">
                    <option className="title3-sous1-section2">Choose country</option>
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref2} > {el.title2}</option>)}
                    {this.state.list.map(el=> <option value={el.ref3} > {el.title3}</option>)}
                    {this.state.list.map(el=> <option value={el.ref4} > {el.title4}</option>)}
                    {this.state.list.map(el=> <option value={el.ref5} > {el.title5}</option>)}
                    {this.state.list.map(el=> <option value={el.ref6} > {el.title6}</option>)}
                    {this.state.list.map(el=> <option value={el.ref7} > {el.title7}</option>)}
                    {this.state.list.map(el=> <option value={el.ref8} > {el.title8}</option>)}
                    {this.state.list.map(el=> <option value={el.ref9} > {el.title9}</option>)}
                    {this.state.list.map(el=> <option value={el.ref10} > {el.title10}</option>)}
                    {this.state.list.map(el=> <option value={el.ref11} > {el.title11}</option>)}
                    {this.state.list.map(el=> <option value={el.ref12} > {el.title12}</option>)}
                    {this.state.list.map(el=> <option value={el.ref13} > {el.title13}</option>)}
                    {this.state.list.map(el=><option value={el.ref14} > {el.title14}</option>)}
                    {this.state.list.map(el=> <option value= {el.ref15} > {el.title15}</option>)}
               </select>
            </div>
        </div>

       
            <img  className="screen1-section2" src="https://www.docplanner.com/img/screen-marketplace@2x.png"/>
        
</div>
<div className="sous2-section2">
<div className="col-2 fade-elements__visible">
    
        {this.state.menu.map(el=><h2 className={el.styl3}>{el.titre3}</h2>)}
        {this.state.menu.map(el=><h1 className={el.styl4}>{el.titre4}</h1>)}
        
            <img className="screen1-section2" src="https://www.docplanner.com/img/screen-saas@2x.png"/>
        
    
</div>
    </div>
    </section>   
    )};
    }

    export default Section1;
    