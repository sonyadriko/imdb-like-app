import React from 'react';
import './main.css'
// import components
import Movies from './movies/Movies';
import Navigation from './navigation/Navigation';

class Main extends React.Component {
    render() {
        return (
            <section className="main">
                <Navigation />
                <Movies />
            </section>
        )
    }
}

export default Main;