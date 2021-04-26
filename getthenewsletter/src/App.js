import React from 'react';
import Newsletter from './components/Newsletter.js';
import './App.css';
import './NewsletterOverride.css';

function App() {
    return (
        <div className = "app__newsletter" >     
        <Newsletter /> 
        </div>
    );
}

export default App;