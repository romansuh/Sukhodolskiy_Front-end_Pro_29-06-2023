import React, { useState, useEffect } from 'react';
import './App.css';
import ContactFormComponent from './Components/ContactForm/ContactFormComponent';
import ContactListComponent from './Components/ContactList/ContactListComponent';

function App() {
  const [contacts, setContacts] = useState([]);
  const [showFormFlag, setShowFormFlag] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          const users = data.map((user) => ({
            firstName: user.name.split(' ')[0],
            lastName: user.name.split(' ')[1],
            phone: user.phone,
          }));
          setContacts(users);
        });
  }, []);

  const addContact = (newContact) => {
    if (newContact) {
      setContacts([...contacts, newContact]);
    }
    setShowFormFlag(false);
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  const showForm = () => {
    setShowFormFlag(true);
  };

  return (
      <div className="App">
        <ContactListComponent
            contacts={contacts}
            deleteContact={deleteContact}
            showForm={showForm}
        />
        {showFormFlag && <ContactFormComponent addContact={addContact} />}
      </div>
  );
}

export default App;
