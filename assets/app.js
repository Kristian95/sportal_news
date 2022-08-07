/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import React from 'react';
import News from './js/components/news';
import * as ReactDOMClient from 'react-dom/client';
import axios from 'axios';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            entries: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/articles')
            .then(response => {
                const entries = response.data;
                console.log(entries)
                this.setState({ entries });
            });
    }

    render() {
        return (
            <div className="row">
                {this.state.entries.map(
                    ({ id, name, text }) => (
                        <News
                            key={id}
                            name={name}
                            text={text}
                        >
                        </News>
                    )
                )}
            </div>
        );
    }
}

ReactDOMClient.createRoot(
    document.getElementById("root"),
  )
  .render(
      <App />
  );
