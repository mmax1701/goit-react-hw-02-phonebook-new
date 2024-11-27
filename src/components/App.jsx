import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact} />

        <h2>Contacts</h2>
        <ContactList />
      </>
    );
  }
}
