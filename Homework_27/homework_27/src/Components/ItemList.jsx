import React from 'react';

function ItemList() {
    const items = [
        { id: 1, title: 'Item 1', description: 'Description for Item 1' },
        { id: 2, title: 'Item 2', description: 'Description for Item 2' },
        { id: 3, title: 'Item 3', description: 'Description for Item 3' },
    ];

    return (
        <div>
            <h3>Item List</h3>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
