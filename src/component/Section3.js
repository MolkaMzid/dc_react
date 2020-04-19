import React, { Component } from 'react';
class Section3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bloc:[{stylblc:"bloc1-section4",ctnstl:"bloc1-content"
            ,imgstl:"logo-bloc1",titlestl:"title1-bloc1",pstl:"p-bloc1",titile2:"Leader in 10 countries",
            prag:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
            ref:"https://www.docplanner.com/img/flag.png",srcref:"https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x"},
            {stylblc:"bloc1-section4",ctnstl:"bloc1-content"
            ,imgstl:"logo-bloc1",titlestl:"title1-bloc1",pstl:"p-bloc1",titile2:"30 million unique patients",
            prag:" visit us every month",
            ref:"https://www.docplanner.com/img/patients.png",srcref:"https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x"},
            {stylblc:"bloc1-section4",ctnstl:"bloc1-content"
            ,imgstl:"logo-bloc1",titlestl:"title1-bloc1",pstl:"p-bloc1",titile2:"1.5 million appointments",
            prag:" booked last month",
            ref:"https://www.docplanner.com/img/visits.png",srcref:"https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x"},
            {stylblc:"bloc1-section4",ctnstl:"bloc1-content"
            ,imgstl:"logo-bloc1",titlestl:"title1-bloc1",pstl:"p-bloc1",titile2:"2 million active doctors",
            prag:" trust in our solutions",
            ref:"https://www.docplanner.com/img/doctors.png",srcref:"https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x"}],
            
        }
    }
    render() {
        return (
            <section className="section4">
                <div className="sous1-section4">
            
                <h1 className="title1-sous1-section4">
                    The world's
                    biggest healthcare platform
                </h1>
                <p className="p-sous1-section4">
                    We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.
                </p>
                <img src="https://www.docplanner.com/img/logo.png" className="img-sous1-section4"/>
            
                </div>
                <div className="sous2-section4">
                {this.state.bloc.map(el=> <div className={el.stylblc}>
                        
                            
                                <div className={el.ctnstl}>
                                    <img className={el.imgstl} scr={el.ref} srcset={el.srcref}/>
                <h3 className={el.titlestl}>{el.titile2}</h3>
                                    <p className={el.pstl}>
                                      {el.prag}
                                    </p>
                                </div>
                        
                    </div>)}
                   
                </div>
            </section> 
        
            )};
        
    
}
    export default Section3;
    