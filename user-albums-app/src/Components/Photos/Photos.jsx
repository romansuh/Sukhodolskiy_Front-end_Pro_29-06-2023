import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import './Photos.css';

function Photos() {
    const location = useLocation();
    const albumId = location.pathname.split('/')[4];
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        let apiUrl = 'https://jsonplaceholder.typicode.com/photos';

        if (albumId !== "0") {
            apiUrl += `?albumId=${albumId}`;
        }

        axios.get(apiUrl)
            .then(response => setPhotos(response.data))
            .catch(error => console.error('Error fetching photos:', error));
    }, [albumId]);

    return (
        <div className='photos-container'>
            <h2>Photos</h2>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title}/>
                        <p>{photo.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Photos;
