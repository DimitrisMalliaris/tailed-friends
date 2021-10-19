import React, { Component } from 'react';
import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import Scroll from './Components/Scroll/Scroll';
import ErrorBoundary from './Components/ErrorBoundary';
import './App.css';
import {friends} from './friends';

class App extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({ friends : friends });
        console.log(friends);
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const{ friends, searchfield} = this.state;
        const filteredFriends = friends.filter(friend => {
            return friend.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !friends.length ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1 bg-washed-yellow br4 title'>Tail Friends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList friends={filteredFriends}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;