import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import portrait from '../../assets/img/portrait.jpg';

// const Header = ({ children }) => {
const Nav = styled.nav`
position: fixed;
top: 0;
width:100%;

.logo {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    float: left;
    width: 50%;
    height: 100vh;
    background-color: yellow;
    opacity: 8;
    transform: ${({ open }) => open ? 'translate(0)' : 'translateY(100%)'};
    transition: transform 1s ease-out;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    transform: ${({ open }) => open ? 'translate(0)' : 'translateY(-100%)'};
    transition: transform 1s ease-out;
    justify-content: center;
    float: left;
    width: 50%;
    height: 100vh;
    background-color: blue;
    

    li {
        padding: 18px 10px;
        color: white;
        transform: ${({ open }) => open ? 'translate(0px)' : 'translateX(600px)'};
        transition: transform 1s ease-out;

        &:nth-child(1) {
         transition-delay: 0.1s;
     }
     &:nth-child(2) {
        transition-delay: 0.2s;
     }
     &:nth-child(3) {
        transition-delay: 0.3s;
     }
     &:nth-child(4) {
        transition-delay: 0.4s;
     }
    }
}

`;


const BrandNav = ({ open }) => {
    return (
       <Nav open={open}>
           <div className='logo'>
          <img src={portrait} alt='portrait' className='portrait' />
           </div>
           <ul>
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/Projects'>Projects</Link></li>
            <li>Blog</li>
            <li>Contact</li>
           </ul>
       </Nav>
    
   
    )
}

export default BrandNav;