import React, { Component } from 'react';
import Container from './components/Container'
import ContactForm from './components/ContactForm';

import './App.css';






class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  };

  addNewContact = data => {
    const { contacts } = this.state;
    const { name, number } = data;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.some(({ name }) => name === contact.name)) {
      alert(`Sorry, ${name} already exists`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  render() {
    return (
      <div className="App">
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addNewContact} />

          
        </Container>
      </div>
    );
  };
}

export default App;