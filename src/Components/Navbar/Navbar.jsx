import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container ">
                <Link to="/" className="fs-3 ubuntu navbar-brand ">
                    Rick & Morty <span className="text-primary">Wiki</span>
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <style jsx="true">
                        {`
                        button[ aria-expanded=false] > .cross{
                            display:none;
                        }
                        button[ aria-expanded=true] > .bars{
                            display:none;
                        }
                    `}
                    </style>

                    <i className="fa-solid fa-bars bars text-dark"></i>
                    <i className="fa-solid fa-times cross text-dark"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5">
                        <NavLink className="nav-link " to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/episodes">
                            Episodes
                        </NavLink>
                        <NavLink className="nav-link" to="/locations">
                            Locations
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar