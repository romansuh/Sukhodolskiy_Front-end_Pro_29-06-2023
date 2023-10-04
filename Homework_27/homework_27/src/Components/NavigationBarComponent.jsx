import React from 'react';

function NavigationBar() {
    const styles = {
        navbar: {
            backgroundColor: "#928de0",
            color: "#000000",
            padding: "10px",
            textAlign: "center",
            position: "absolute",
            width: "10%",
            height: "100%",
            borderRight: "solid 1px",
            flex: 2
        },

        navbar_ul: {
            listStyle: "none",
            padding: "0"
        },

        navbar_li: {
            paddingTop: "10px",
            paddingBottom: "10px"
        },

        navbar_a: {
            textDecoration: "none",
            color: "#000000"
        }
    };

    return (
        <nav className="navbar" style={styles.navbar}>
            <ul className="navbar_ul" style={styles.navbar_ul}>
                <li className="navbar_li" style={styles.navbar_li}>
                    <a href="/" className="navbar_a" style={styles.navbar_a}>Home</a>
                </li>
                <li className="navbar_li" style={styles.navbar_li}>
                    <a href="/" className="navbar_a" style={styles.navbar_a}>About</a>
                </li>
                <li className="navbar_li" style={styles.navbar_li}>
                    <a href="/" className="navbar_a" style={styles.navbar_a}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;