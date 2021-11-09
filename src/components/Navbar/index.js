import React from 'react'

const Navbar = () => {
    return (
        <div>
            <>
                <Nav>
                    <NavLink to="/">
                        <h1>Logo</h1>
                    </NavLink>
                    <Bars />
                    <NavMenu>
                        <NavLink to="/about" activeStyle>
                            About
                        </NavLink>
                        <NavLink to="/about" activeStyle>
                        About
                        </NavLink>
                        <NavLink to="/about" activeStyle>
                        About
                        </NavLink>
                        <NavLink to="/about" activeStyle>
                        About
                        </NavLink>
                        <NavBtn>
                            <NavBtnLink to="/about">Sign in</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </Nav>
            </>
        </div>
    )
}

export default Navbar
