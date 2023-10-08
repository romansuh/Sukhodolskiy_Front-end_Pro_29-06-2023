import React, { useState, useEffect } from 'react';
import './Emoticon.css';

function Emoticon({ emoticon }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem(emoticon);
        if (storedCount) {
            setCount(Number(storedCount));
        }
    }, [emoticon]);

    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount);
        localStorage.setItem(emoticon, newCount.toString());
    };

    return (
        <div className="emoticon">
            <span>{emoticon}</span>
            <button onClick={handleClick}>Vote</button>
            <span>Count: {count}</span>
        </div>
    );
}

export default Emoticon;
