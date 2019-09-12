import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import '../containers/App.css'



// PROPS never change, they give the information and the function just renders that
// This is what is called a dumb function which is what we had up until now  
// We need the search box to be smart and this is what is called a STATE 
// We need the search box to communicate to the information and for it to be searchable 

// you need the super to call the constructor of the component 

// state is an object that describes your application . it can change and affect the app

// props are things that come out of state 


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield : ''
        }
       
    }

    componentDidMount(){
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState ({robots :users })
            );
       
      
    }
    onSearchChange = (event) => {
        this.setState ({ searchfield : event.target.value})
    }
    render(){
        const {robots, searchfield} = this.state;
                    // Create this const so that everytime you have to writ this.state for robots or searchfield
                    // it is already defined. This saves on repetition.
         const filteredRobots = robots.filter (robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
           })

     if (!robots.length) {
        //  you can also write if (!robots.length){} that means that "if this is 0 which is going to be false,
        // turn it into true, so that if there is no robots,we are loading...
        // or just (robots.length===0){}

        // Another way is asking return !robots.length ?
         return <h1 className= 'f-headline measure tc'>Loading...</h1>
     }else {
        return(
            <div className = 'tc'>
                <h1 className= 'f-headline measure'> RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                     <CardList robots={filteredRobots}/> 
                </Scroll>
                
            </div>
            );
        }
}
    
}
export default App;
// So now we access the robots not from that prop but from the state!
// app owns state that includes robots, its allowed to change it 

