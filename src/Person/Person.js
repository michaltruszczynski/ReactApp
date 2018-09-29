import React from 'react';
import classes from  './Person.css';


import './Person.css'

//nazwe props można zmienić. może być inna zmienna ale nazywa się ona props
const person = (props) => {
    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error('Something went wrong');
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default person;