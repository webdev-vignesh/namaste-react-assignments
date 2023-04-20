import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('h1', {id: 'parent'}, 
[
    React.createElement('div', {id: 'child'}, [
        React.createElement('h1', {}, "I'm a h1 tag"),
        React.createElement('h2', {}, "I'm a h2 tag"),
    ]),
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {}, "I'm a h1 tag"),
        React.createElement('h2', {}, "I'm a h2 tag"),
    ]),
]
);

// React.createElement => React Element - JS object => HTML element(Render)

console.log(parent)
        
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);