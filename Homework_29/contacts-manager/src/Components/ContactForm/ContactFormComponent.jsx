import React, { useState } from 'react';
import './ContactForm.css';

const ContactFormComponent = ({ addContact }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact({ firstName, lastName, phone });
        setFirstName('');
        setLastName('');
        setPhone('');
    };

    return (
        <div className="add-contact-form-container" >
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-fields-container">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-fields-container">
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-fields-container">
                    <input
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button className="submit-button" type="submit">Save</button>
                    <button className="cancel-button" onClick={() => addContact(null)}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default ContactFormComponent;
