import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className='header '>
                <nav className=" container navbar navbar-expand-lg  ">
                    <div className='navbar-left'>
                        <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <a className="nav-link" href="#!">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link colortext" href="#!">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link colortext" href='#!'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}
