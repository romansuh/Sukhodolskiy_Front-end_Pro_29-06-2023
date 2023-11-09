import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="users-container">
            <h2>List of Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        <Link to={`/users/${user.id}/albums`}>
                            <button className="albums-btn">Albums</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
