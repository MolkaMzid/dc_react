import React, { Component } from 'react';
class Section5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart1:[{ref1:"https://www.docplanner.com/images/warsaw.png",refset1:"https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x",styl:"card",linkstl:"link-card",imgstl:"img-card",titlestl:"label-card",btnstl:"btn-card",title:"See openings"}],
            cart2:[{ref2:"https://www.docplanner.com/images/barcelona.png",refset2:"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x",styl:"card",linkstl:"link-card",imgstl:"img-card",titlestl:"label-card",btnstl:"btn-card",title:"See openings"}],
            cart3:[{ref3:"https://www.docplanner.com/images/istanbul.png",refset3:"https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x",styl:"card",linkstl:"link-card",imgstl:"img-card",titlestl:"label-card",btnstl:"btn-card",title:"See openings"}],
            cart4:[{ref4:"https://www.docplanner.com/images/rome.png",refset4:"https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x",styl:"card",linkstl:"link-card",imgstl:"img-card",titlestl:"label-card",btnstl:"btn-card",title:"See openings"}],
            cart5:[{ref5:"https://www.docplanner.com/images/mexico-city.png",refset5:"https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x",styl:"card",linkstl:"link-card",imgstl:"img-card",titlestl:"label-card",btnstl:"btn-card",title:"See openings"}],
            cart6:[{ref6:"https://www.docplanner.com/images/curitiba.png",refset6:"https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x",styl:"card",linkstl:"link-card",imgstl:"img-card",titlestl:"label-card",btnstl:"btn-card",title:"See openings"}],
          
            
        }
    }
    render() {
        return ( <section className="section6">
        {this.state.cart1.map(el=> <div className={el.styl}>
            <a href="/career?&amp;loc=poland#jobs-offers" className={el.linkstl}>
                
                    <img className={el.imgstl} scr={el.ref1} srcset={el.refset1}/>
                
                <div className={el.titlestl}>
                    Warsaw
                    <button className={el.btnstl}>{el.title}</button>
                </div>
            </a>
        </div>)}
        {this.state.cart2.map(el=> <div className={el.styl}>
            <a href="/career?&amp;loc=spain#jobs-offers" className={el.linkstl}>
                
                    <img className={el.imgstl} scr={el.ref2} srcset={el.refset2}/>
                
                <div className={el.titlestl}>
                    Barcelona
                    <button className={el.btnstl}>{el.title}</button>
                </div>
            </a>
        </div>)}
        {this.state.cart3.map(el=><div className={el.styl}>
            <a href="/career?&amp;loc=rome#jobs-offers" className={el.linkstl}>
                
                    <img className={el.imgstl} scr={el.ref3} srcset={el.refset3}/>
                
                <div className={el.titlestl}>
                    Istanbul
                    <button className={el.btnstl}>{el.title}</button>
                </div>
            </a>
        </div>)}
        {this.state.cart4.map(el=> <div className={el.styl}>
            <a href="/career?&amp;loc=italy#jobs-offers" className={el.linkstl}>
                
                    <img className={el.imgstl} scr={el.ref4} srcset={el.refset4}/>
                
                <div class={el.titlestl}>
                    Rome
                    <button className={el.btnstl}>{el.title}</button>
                </div>
            </a>
        </div>)}
       {this.state.cart5.map(el=> <div className={el.styl}>
            <a href="/career?&amp;loc=mexico#jobs-offers" className={el.linkstl}>
                
                    <img className={el.imgstl} scr={el.ref5} srcset={el.refset5}/>
                
                <div className={el.titlestl}>
                    Mexico City
                    <button className={el.btnstl}>{el.title}</button>
                </div>
            </a>
        </div>)}
       {this.state.cart6.map(el=> <div className={el.styl}>
            <a href="/career?&amp;loc=brazil#jobs-offers" className={el.linkstl}>
                
                    <img className={el.imgstl} scr={el.ref6} srcset={el.refset6}/>
                
                <div className={el.titlestl}>
                    Curitiba
                    <button className={el.btnstl}>{el.title}</button>
                </div>
            </a>
        </div>)}
    </section>)};
    
    
}
    export default Section5;
    