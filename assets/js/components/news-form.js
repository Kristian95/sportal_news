import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

class NewsForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: '', text: '', published_at: new Date() };
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
            <div className="row mb-4">
              <div className="col">
                <label>Name</label>
                <input 
                    name="name"
                    type="text" 
                    value={this.state.name || ""}
                    onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <label>Published at</label>
                <DatePicker
                  selected={this.state.published_at}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <label>Text</label>
                    <textarea 
                        name="text"
                        type="textarea" 
                        value={this.state.text || ""}
                        onChange={this.handleChange}
                    />
              </div>
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
      );
    }
  }

  export default NewsForm;
