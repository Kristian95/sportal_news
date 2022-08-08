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
import NewsForm from './js/components/news-form';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            news: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/articles')
            .then(response => {
                const news = response.data;
                this.setState({ news });
            });
    }

    render() {
        return (
            <div className="container">
                <NewsForm></NewsForm>
                <div>
                {this.state.news.map(
                    ({ id, name, text, created_at }) => (
                        <News
                            key={id}
                            name={name}
                            text={text}
                        >
                        </News>
                    )
                )}
                </div>
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
