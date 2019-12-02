import React from "react";
import logo from '../../../src/logo.svg';

export default function () {
 return (
    <header className="header">
        <div className="container">
            <img src={logo} className="header__logo" alt="logo" />
        </div>
    </header>
 )
}