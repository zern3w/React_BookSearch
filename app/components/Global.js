import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon, Button } from 'react-bootstrap';
import Gallery from './Gallery'

class Global extends Component {

    constructor(props){
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }

    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='
        fetch(`${BASE_URL}${this.state.query}`, { method: 'GET'})
        .then(response => response.json())
        .then(json => {
            let { items } = json;
            this.setState({items})
        });
    }

    render() {
        let icon = 'http://www.777a7.com/img2/nmmxznszdsiistpguldz.png'
        return (
            <div className="Global">
                 <img 
                                    src={icon} 
                                    className="icon"
                                    />
                <h2>Book Explorer!</h2>
                <FormGroup bsSize="large" className="input">
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for a book"
                            onChange={event => this.setState({query: event.target.value})}
                            onKeyPress={event => {
                                if (event.key === 'Enter'){
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Addon >
                            <Glyphicon glyph="search" onClick={() => this.search()}></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <hr />
                
                <Gallery items={ this.state.items } />
            </div>
        )
    }
}

export default Global;