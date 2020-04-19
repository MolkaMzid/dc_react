import React, { Component } from 'react';
class Section3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bloc:[{stylblc:"bloc1-section4",ctnstl:"bloc1-content"
            ,imgstl:"logo-bloc1",titlestl:"title1-bloc1",pstl:"p-bloc1"}],
            
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
                                    <img className={el.imgstl} scr="https://www.docplanner.com/img/flag.png" srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x"/>
                                    <h3 className={el.titlestl}>Leader in 10&nbsp;countries</h3>
                                    <p className={el.pstl}>
                                        Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile
                                    </p>
                                </div>
                        
                    </div>)}
                    {this.state.bloc.map(el=> <div className={el.stylblc}>
                        
                            
                        <div className={el.ctnstl}>
                        <img className={el.imgstl}scr="https://www.docplanner.com/img/patients.png" srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x"/>
                        <h3 className={el.titlestl}>30 million unique patients</h3>
                        <p className={el.pstl}>
                                visit us every month
                            </p>
                        </div>
                
                     </div>)}
                </div>
                <div className="sous3-section4">
                {this.state.bloc.map(el=> <div className={el.stylblc}>
                        
                            
                    <div className={el.ctnstl}>
                    <img className={el.imgstl}scr="https://www.docplanner.com/img/visits.png" srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x"/>
                    <h3 className={el.titlestl}>1.5 million appointments</h3>
                    <p className={el.pstl}>
                                        booked last month
                                    </p>
                                </div>
                        
                    </div>)}
                   {this.state.bloc.map(el=> <div className={el.stylblc}>
                        
                            
                    <div className={el.ctnstl}>
                        <img className={el.imgstl} scr="https://www.docplanner.com/img/doctors.png" srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x"/>
                            <h3 className={el.titlestl}>2 million active doctors</h3>
                            <p className={el.pstl}>
                                trust in our solutions
                            </p>
                        </div>
                
                     </div>)}
                </div>
            </section> 
        
            )};
        
    
}
    export default Section3;
    