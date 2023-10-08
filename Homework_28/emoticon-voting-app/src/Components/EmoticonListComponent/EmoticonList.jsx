import React from 'react';
import Emoticon from '../EmoticonComponent/Emoticon';
import './EmoticonList.css';

function EmoticonList({ emoticons }) {
    return (
        <div className='emoticon-list'>
            {emoticons.map((emoticon, index) => (
                <Emoticon key={index} emoticon={emoticon} />
            ))}
        </div>
    );
}

export default EmoticonList;
