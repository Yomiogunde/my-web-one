import React, { Component } from 'react';

const TITLES = [
  'a Business Transformation Manager',
  'a Security Risk Manager',
  'a Technology Leader',
  'a People Person',
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };
  
    componentDidMount() {
      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
  
      this.animateTitles();
    }
  
    componentWillUnmount() {
      console.log('Title component will unmount!');
  
      clearInterval(this.titleInterval);
      clearTimeout(this.timeout);
    }
   
    animateTitles = () => {
      this.titleInterval = setInterval(() => {
        const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
  
        this.setState({ titleIndex, fadeIn: true });
  
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
      }, 4000);
    };
  
    render() {
      const { fadeIn, titleIndex } = this.state;
  
      const title = TITLES[titleIndex];
  
      return (
        <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>
          I am {title}
        </p>
      );
    }
  }
  
  export default Title;
  