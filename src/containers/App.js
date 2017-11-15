import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            {id: 'dhd1', name: 'Alex'},
            {id: 'vhu2', name: 'Mega'}
        ],
        switcher: false
    };

    deletePerson = (id) => {
        const persons = [...this.state.persons];
        persons.splice(id,1);
        this.setState({persons: persons})
    };
    togglePersonWrapper = () => {
        const doesShow = this.state.switcher;
        this.setState({switcher: !doesShow});
    };
    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id ===id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        //const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState( {persons: persons});
        {console.log(this.state.persons)}
    };
    render() {
        let persons = null;

        if (this.state.switcher) {
            persons = <Persons
                        persons = {this.state.persons}
                        clicked = {this.deletePerson}
                        changed = {this.nameChangeHandler}
                    />;
        }
        return (
          <div className={classes.App}>
                <Cockpit
                    persons = {this.state.persons}
                    switcher = {this.state.switcher}
                    clicked = {this.togglePersonWrapper}/>
                {persons}
          </div>
        );
      // return React.createElement('div', {className: 'App'}, React.createElement('header',{className: 'App-header'},'Welcome to React'));
    }
}

export default App;
