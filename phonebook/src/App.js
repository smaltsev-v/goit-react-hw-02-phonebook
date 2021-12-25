import React, { Component } from "react";
import ContactForm from "./componets/ContactF";


import { v4 as uid } from "uuid";


class App extends Component {
  state = {
    contacts: contacts,
    filter: "",
  };

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;

    if (contacts.some((contact) => contact.name === name)) {
      alert(
        `${name} is already in contacts. Want to replace an existing contact ?`
      );
      return;
    }
    const id = uid();
    this.setState({
      contacts: [{ name, number, id }, ...contacts],
      filter: "",
    });

    console.log({ name, number });
  };

  

  

  render() {
    

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}

export default App;