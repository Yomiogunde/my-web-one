import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Burger from '../src/components/Nav/Burger';
import App from './components/App';
import Projects from './components/Projects';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    text-align: center;
    font-size: 20px;
    padding: 2.5%;
    line-height: 1.5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  }
  
  h1, h2, h3, h4, h5 {
    /* font-family: 'EconomicaBold'; */
    margin: 0;
  font-weight: 400; }
  h1.lg-heading,
  h2.lg-heading
  /* h3.lg-heading  */
  {
    font-size: 6rem; }
  h1.sm-heading,
  h2.sm-heading
  /* h3.sm-heading  */
  {
    margin-bottom: 2rem;
    padding: 0.2rem 1rem;
    background: rgba(73, 73, 73, 0.5); }
  
  .text-secondary {
  color: #eece1a; }

  .backg {
      z-index: -3;
  }


  .portrait {
    width: 200px;
    height: 200px;
    border-radius: 100px;
  }
  
  .title-fade-out {
    opacity: 0;
    animation-name: fade-out;
    animation-duration: 2s;
  }
  
  .title-fade-in {
    opacity: 100;
    animation-name: fade-in;
    animation-duration: 2s;
  }
  
  @keyframes fade-out {
    from {opacity: 100}
    to {opacity: 0}
  }
  
  @keyframes fade-in {
    from {opacity: 0}
    to {opacity: 100}
  }

`;

// ReactDOM.render(
//     <>
//     <GlobalStyle />
//     <App />
//     </>
//   ,document.getElementById('root')
// );

ReactDOM.render(
    <>
    <GlobalStyle />
     <Router history={createBrowserHistory()}>
       <Switch>
        <Route exact path='/' render={() => <Burger><App /></Burger>} />
        <Route path='/Projects' render={() => <Burger><Projects /></Burger>} />
        </Switch>
    </Router>
    </>,
    document.getElementById('root')
  );
  
  