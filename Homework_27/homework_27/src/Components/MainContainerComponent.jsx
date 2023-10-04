import React from 'react';
import ItemList from './ItemList';
import CodeExample from './CodeExample';

function MainContainer() {
    const styles = {
        main: {
            padding: "20px",
            flex: 1,
            marginLeft: "14%",
            textAlign: "left"
        }
    }

    return (
        <main className="main_container" style={styles.main}>
            <h2>Welcome to my first react app</h2>
            <p>This app contains a fixed header, navigation bar and central area.</p>

            <p>Example of rendering another component (ItemList)</p>
            <ItemList/>

            <p>Example of rendering another component (CodeExample)</p>
            <CodeExample/>
        </main>
    );
}

export default MainContainer;
