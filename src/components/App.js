import React from 'react';
import SearchBar from './Searchbar';
import api from '../apis/api';
import List from './List';

class App extends React.Component {
    state = {
        data: [],
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await api.get('/restaurants', {
            params: {
                city: termFromSearchBar
            }
        })
		
        this.setState({
            data: response.data.restaurants
        })
    };

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="11 wide column">
                            <List data={this.state.data}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;