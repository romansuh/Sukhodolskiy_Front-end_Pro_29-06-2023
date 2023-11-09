import React, {useState, useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom';
import axios from 'axios';
import './Albums.css';

function Albums() {
    const location = useLocation();
    const userId = location.pathname.split('/')[2];
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        let apiUrl = 'https://jsonplaceholder.typicode.com/albums';

        if (userId !== "0") {
            apiUrl += `?userId=${userId}`;
        }

        axios.get(apiUrl)
            .then(response => setAlbums(response.data))
            .catch(error => console.error('Error fetching albums:', error));
    }, [userId]);

    return (
        <div className="albums-container">
            <h2>List of Albums</h2>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        {album.title}
                        <Link to={`/users/${userId}/albums/${album.id}/photos`}>
                            <button className="photos-btn">Photos</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Albums;
