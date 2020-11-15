import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const NavLink = styled(Link)`
  color: #4D4D4D;
  font-family: dosis;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #FCAF38;
    // background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
      <p>
        <NavLink to="/">{siteTitle}</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </p>
  </SiteHeader>
)


export default Header
