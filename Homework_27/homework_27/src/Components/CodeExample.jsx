import React from 'react';

function CodeExample() {
    const code = `
    function greet(name) {
      console.log('Hello, ' + name + '!');
    }
    
    greet('John');
    `;

    return (
        <div className="code-example">
            <h3>Code Example</h3>
            <pre>
        <code>{code}</code>
      </pre>
        </div>
    );
}

export default CodeExample;
