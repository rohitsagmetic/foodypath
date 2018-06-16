import React, { Component } from 'react';
import './assets/css/app.css';
import Search from './comp/Search';
import Lists from './comp/Lists';

class App extends Component {
    constructor() {
        super()

        this.state = {
            locations: [
                {
                    id: 1,
                    name: 'A badder place',
                    distance: 3,
                    rating: 3
                },
                {
                    id: 2,
                    name: 'Anotherbad',
                    distance: 4,
                    rating: 5
                },
                {
                    id: 3,
                    name: 'The cheapest place',
                    distance: 69,
                    rating: 2.1
                },
            ],
            filterString: '',
        }
    }

    render() {
        return (
            <div>
                <header className="header">
                    <h1 className="header__logo-text">Foody Path</h1>
                    <p>Will be up and feeding really soon! Hopefully!</p>
                </header>
                <Search filterRun={query => this.setState({'filterString': query})} />
                <Lists availableLists={this.state.locations} filterQuery={this.state.filterString} />
            </div>
        )
    }
}

export default App;
