import React from "react";

function HeaderComponent() {
    const styles = {
        header: {
            backgroundColor: "#66639d",
            position: "fixed",
            width: "100%",
            height: "100px",
            zIndex: 100,
            top: 0,
            borderBottom: "solid 1px"
        }
    }

    return (
        <header className="header" style={styles.header}>
            <h1>My App</h1>
        </header>
    );
}

export default HeaderComponent;
