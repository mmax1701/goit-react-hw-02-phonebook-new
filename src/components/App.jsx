import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const newContact = { ...data, id: nanoid() };
    this.state.contacts.find(contact =>
      contact.name.toLowerCase() === data.name.toLowerCase()
        ? alert(`${data.name} is already in contacts`)
        : this.setState(prevState => ({
            contacts: [...prevState.contacts, newContact],
          }))
    );
  };

  findContact = contactName => {
    this.setState({ filter: contactName.toLowerCase() });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter findContact={this.findContact} />
        <ContactList contacts={filteredContacts} />
      </>
    );
  }
}
