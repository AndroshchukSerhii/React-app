import React from  'react';
import Persons from './Persons.css';

const person = (props) => {
    return (
        <div className={Persons.Person} >
            <p onClick={props.click}>I`m a person  {props.name} {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>)
};
export default person;