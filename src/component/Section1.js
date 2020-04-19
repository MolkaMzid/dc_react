import React, { Component } from 'react';
class Section1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[{ref1:"http://www.doctoraliar.com",titel1:"Argentina"},{ref1: "http://www.doctoralia.com.au",title1:"Australia "}
            ,{ref1:"http://www.doctoralia.com.br",title1:"Brazil "},{ref1:"http://www.doctoralia.cl",title1: "Chile"},{ref10:"/http://www.doctoralia.co" ,title1:"Colombia"}
            ,{ref1:"http://www.znamylekar.cz",title1:"Czech"},{ref1:"http://www.doctoralia-fr.com",title1: "France"},{ref1:"http://www.miodottore.it" ,title1:"Italy"}
            ,{ref1:"http://www.doctoralia.com.mx",title1:"Mexico"},{ref1:"http://www.doctoralia.pe",title1: "Peru"},{ref1:"http://www.znanylekarz.pl" ,title1:"Poland"}
            ,{ref1:"http://www.doctoralia.com.pt",title12:"Portugal"},{ref1:"http://www.doctoralia.es",title1: "Spain"},{ref1:"http://www.doktortakvimi.com" ,title1:"Turkey"}
            ,{ref1:"http://www.doctoralia.co.uk" ,title15:"UK"}],
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
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=><option value={el.ref1} > {el.title1}</option>)}
                    {this.state.list.map(el=> <option value={el.ref1} > {el.title1}</option>)}
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
    