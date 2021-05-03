import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import styled from 'styled-components'

 function Navbar() {
    const Nav = styled.div`
display:flex;
align-items:center;
background-color: purple;
padding:0 36px;
height:70px;


    `
const Logo = styled.img`
    /* display:flex;
    align-items:center; */
    width:80px;
    /* height:50px;
    padding: 0, 16px; */
    `
const NavMenu  = styled.ul`
    list-style: none;
img{
    display: flex;
    align-items: center;
    padding: 0 5px;
}
  li{
    display: flex;
  align-items: center;
  text-decoration:none;
 
  }
  li span{
      color: white;
  }
`

    return (
    
    <Nav>
        <Logo  src="https://64.media.tumblr.com/7562f0d4eba0291db7d534940fac6f7e/ff48b0162b1d0d9a-f2/s640x960/53c3bd7bd47ca83b233f1767441e5b723de323bd.png" alt=""/>
          <NavMenu>

            <li>
              <img src="https://64.media.tumblr.com/0a59509224915835632272cf7090271d/07e2f50191398f75-6d/s500x750/f3f735bf11818b2ddf6e7e853179aa102f7493bc.jpg" width="15" height="15" alt=""/>
              <Link to="/about">
                  <span>menu</span>
              </Link>
            </li>
       
          </NavMenu >
        </Nav>

    )


 
}

export default Navbar