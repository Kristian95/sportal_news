import React from 'react';
import axios from 'axios';

class NewsForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: '', text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;

        const name = target.name;
        this.setState({
          [name]: event.target.value
        });  
    }
    handleSubmit(event) {
      event.preventDefault();
      axios.post('http://localhost:8000/articles_store', this.state)
      .then(response => {
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input 
                    name="name"
                    type="text" 
                    value={this.state.name || ""}
                    onChange={this.handleChange} 
                />
            </div>
            <div className="form-group">
                <label>Text</label>
                <textarea 
                    name="text"
                    type="textarea" 
                    value={this.state.text || ""}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
      );
    }
  }

  export default NewsForm;
