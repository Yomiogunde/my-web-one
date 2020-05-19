import React, { useState } from 'react';
import styled from 'styled-components';
import BrandNav from './BrandNav';

const StyleBurger = styled.div`
 position: absolute;
 top: 35px;
 right: 35px;
 /* display: flex; */
 cursor: pointer;
 z-index: 3;

 div {
     width: 28px;
     height: 3px;
     margin: 0 0 5px 0;
     background-color: ${({ open }) => open ? '#ccc' : '#333'};
     transform-origin: 2px;
     transition: all 0.2s linear;
     
     &:nth-child(1) {
         transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
     }
     &:nth-child(2) {
         transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
         opacity: ${({ open }) => open ? 0 : 1};
     }
     &:nth-child(3) {
         transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
     }
 }
`;

const Burger = ({ children }) => {

    const [open, setOpen] = useState(false)

    return (
        <div>
        <StyleBurger open={open} onClick={() => setOpen(!open)}> {/*false to true. if open change to false*/}
            <div />
            <div />
            <div />
        </StyleBurger>
        <BrandNav open={open}/>
        {children}
        </div>
    )
}

export default Burger;
