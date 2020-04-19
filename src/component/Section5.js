import React, { Component } from 'react';
class Section5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart1:[{ref1:"https://www.docplanner.com/images/warsaw.png",refset1:"https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x",styl:"card",linkstl:"link-card",imgstl:"img-card",titlestl:"label-card",btnstl:"btn-card",title:"See openings",titre:" Warsaw"},
            {ref1:"https://www.docplanner.com/images/barcelona.png",refset1:"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x",styl:"card",linkstl:"link-card",imgstl:"img-card",titlestl:"label-card",btnstl:"btn-card",title:"See openings",titre:" Barcelona"},
            {ref1:"https://www.docplanner.com/images/istanbul.png",refset1:"https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x",styl:"card",linkstl:"link-card",imgstl:"img-card",titlestl:"label-card",btnstl:"btn-card",title:"See openings",titre:"Istanbul"},
            {ref1:"https://www.docplanner.com/images/rome.png",refset1:"https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x",styl:"card",linkstl:"link-card",imgstl:"img-card",titlestl:"label-card",btnstl:"btn-card",title:"See openings"},
            {ref1:"https://www.docplanner.com/images/mexico-city.png",refset1:"https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x",styl:"card",linkstl:"link-card",imgstl:"img-card",titlestl:"label-card",btnstl:"btn-card",title:"See openings",titre:"Rome"},
            {ref1:"https://www.docplanner.com/images/curitiba.png",refset1:"https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x",styl:"card",linkstl:"link-card",imgstl:"img-card",titlestl:"label-card",btnstl:"btn-card",title:"See openings",titre:"Mexico City"}],
          
            
        }
    }
    render() {
        return ( <section className="section6">
        {this.state.cart1.map(el=> <div className={el.styl}>
            <a href="/career?&amp;loc=poland#jobs-offers" className={el.linkstl}>
                
                    <img className={el.imgstl} scr={el.ref1} srcset={el.refset1}/>
                
                <div className={el.titlestl}>
                   {el.titre}
                    <button className={el.btnstl}>{el.title}</button>
                </div>
            </a>
        </div>)}
        
    </section>)};
    
    
}
    export default Section5;
    