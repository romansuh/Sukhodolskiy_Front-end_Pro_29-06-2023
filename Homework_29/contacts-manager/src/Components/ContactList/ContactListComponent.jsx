import React from 'react';
import './ContactList.css';

const ContactListComponent = ({ contacts, deleteContact, showForm }) => {
    return (
        <div className="contacts-table-container">
            <h2>Contact Manager</h2>
            <table className="contacts-table">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact, index) => (
                    <tr key={index} className="contact-container">
                        <td>{contact.firstName}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button className="delete-button" onClick={() => deleteContact(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button className="add-contact-button" onClick={() => showForm()}>Add Contact</button>
        </div>
    );
};

export default ContactListComponent;
