import React from 'react';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import logo from './images/logo192.png'

const Navegacion = ()=> {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});

    return (
        <>
        <ul id="slide-out" className="sidenav sidenav-fixed">
            <li>
                <div className="user-view background-nav">
                    <div className=""></div>
                    <a href="#user"><img className="circle" src={logo} /><span className="white-text name">Carolina Véjar</span></a>
                    <a href="#email"><span className="white-text email">vejarcarolina.95@gmail.com</span></a>
                </div>
            </li>
            <li><a className="waves-effect"href="#!">Link</a></li>
            <li><div className="divider"></div></li>
            <li><a className="waves-effect">Link</a></li>
            <li><a className="waves-effect" href="#!">Link</a></li>
        </ul>
        </>
    );
}


export default Navegacion;
