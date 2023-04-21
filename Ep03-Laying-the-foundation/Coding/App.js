import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '@iconify/react';

// Task 1.1
const  TitleComponent1 = React.createElement('div', {class: 'title'}, [
    React.createElement('h1', {}, "Task 1.1"),
    React.createElement('h2', {}, "I'm heading 2"),
    React.createElement('h3', {}, "I'm heading 3"),
]);

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(TitleComponent1);

// Task 1.2
const TitleComponent2 = (<div className="title">
    <h1>Task 1.2</h1>
    <h2 style={{color: 'red'}}>Namaste</h2>
    <h3>React</h3>
</div>)

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(TitleComponent2);

// Task 1.3
const TitleComponent3 = () => {
    return(
        <div className='title' style={{backgroundColor: 'rebeccapurple', color: 'white'}}>
            <h1 style={{padding: '20px'}}>Task 1.3</h1>
            <h2>Web development</h2>
            <h3>Course</h3>
        </div>
    )
};

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<TitleComponent3 />);

// Task 1.4
const TitleComponent4 = () => {
    return(
        <div className='title' style={{border: '5px solid green', padding: '5px'}}>
            <h1>Task 1.4 - Component Compensation</h1>
            {TitleComponent1}
            {TitleComponent2}
            {TitleComponent3}
            <TitleComponent3 />
            <TitleComponent3></TitleComponent3>
        </div>
    )
};

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(<TitleComponent4 />);


// Task 2 - Header component from scratch using JSX functional component

const Header = () => {
    return(
        <div className='header'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qtXaE-DeN4ScTnV4Qo07mpKSc4zODPTKww&usqp=CAU' className='logo' />
            <div className='search'>
                <input type='text' placeholder='search' />
            </div>
            <div className='user'>
                <Icon icon="mdi:user-circle-outline"  width="40" height="40" />
            </div>
        </div>
    )
}

const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(<Header />);