import React from 'react';
import logo from '../../assets/logo.svg';
import classes from './Cockpit.css';


const cockpit = (props) => {
    let asignetclasses = [];
    let btndefoult = classes.Green;

    if (props.switcher) {
       btndefoult = classes.Red;
   }
    if (props.persons.length < 2) {
        asignetclasses.push(classes.red)
    }
    if (props.persons.length < 1) {
        asignetclasses.push(classes.bold);
    }
    return (
    <div>
        <header className={classes.AppHeader}>
            <img src={logo} className={classes.Applogo} alt="logo" />
            <h1 className={asignetclasses.join(' ')}>Welcome to React</h1>
        </header>
        <div className={classes.AppIntro}>
        To get started, edit <code>src/App.js</code> and save to reload.
        <button
            className = {btndefoult}
            onClick={props.clicked}>Rename</button>
        </div>
    </div>
    )
};

export default cockpit;