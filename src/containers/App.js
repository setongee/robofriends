import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBar from '../components/SearchBar'
import './App.css'
import Alert from '../components/Alert'


class App extends Component {

    constructor () {
        super()

        this.state = {
            robots : [],
            search : '',
        }
    }

    componentDidMount () {
        fetch ( 'https://jsonplaceholder.typicode.com/users' )
        .then( response => response.json() )
        .then (users => this.setState ( { robots : users } ) )
    }

    onSearchChange = (e) => {

        this.setState( { search : e.target.value } )

    }

    render () {

        const {robots, search} = this.state

        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(search.toLowerCase())
        })

        return (
            <div className = 'tc bg'>
               
                <div className = 'header'>
                    <h1 className = 'mg'> robots.io</h1>
                    <SearchBar onSearch = {this.onSearchChange} placeholder = "Search for robots by name here always"/>
                </div>

                <CardList robots={filterRobots} />
                <Alert err = {filterRobots}/>
            </div>
        )
    }
}

export default App