import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import './Photos.css';

function Photos() {
    const location = useLocation();
    const albumId = new URLSearchParams(location.search).get('albumId');
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        let apiUrl = 'https://jsonplaceholder.typicode.com/photos';

        if (albumId) {
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
