import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import menu from './menu';

ReactDOM.render(<App menu={menu} />, document.getElementById('root'));
