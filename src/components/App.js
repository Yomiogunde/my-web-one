import React, { Component } from 'react';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
// import Burger from '../components/Nav/Burger';
// import backg from '../assets/img/backg.jpg';

 



class App extends Component {

   state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }


  render() {
    return (
     <div> 
       {/* <Burger /> */}
       {/* <img src={backg} alt='backg' className='backg' /> */}
       <h1 className="lg-heading">
            Yomi <span className="text-secondary">Ogunde</span>
          </h1>
          <br />
          <h2 className="sm-heading">
            <Title />
          </h2>
          {
          this.state.displayBio ? (
            <div>
              <h3>
              <p>I have extensive experience in Digital Business Transformation</p>
              <p>I specialise in leveraging technology to deliver business obejectives</p>
              <p>using cloud infrastructure with governance and security risk management</p>
              </h3>
              <br />
              <SocialProfiles />
              <br />
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
          }  

     </div> 
           
    )
  }
}

export default App;
