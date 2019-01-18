import React,{ Component } from 'react';
import Card from './components/Card';
import ScoreBoard from './components/ScoreBoard'
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import simpsons from './simpsons.json';
import _ from 'lodash';
import './App.css';


class App extends Component {
  state = {
    simpsons,
    count: 0
  }

  cardClicked = id => {
    let simpsonsClicked = false;
    this.setState({
      count: this.state.count + 1
    })
    this.setState({
      simpsons: this.state.simpsons.map((sim)=> {
        if (sim.id === id) {
          if (sim.clicked === true) {
            simpsonsClicked = true
          }
          sim.clicked = true;
        }
        return sim;

      })
    });
    if (simpsonsClicked === true) {
      this.restartGame();
    }
      this.shuffle();
  };

  restartGame = () => {
    alert("Game Over Try Again")
    this.setState({
      simpsons: this.state.simpsons.map((sim)=>{
        sim.clicked = false;
        return sim;
      }),
      count: 0})
    }

shuffle = () => {
  let array = this.state.simpsons;
  let shuffleArray = _.shuffle(array);
  this.setState({
    simpsons: shuffleArray
  });
}


 render(){
     // Map over this.state.simpsons and render a Card component for each simpson object 
  return ( 

    <Wrapper>
    <Title>Simpsons Clicky Game    <ScoreBoard>Score: {this.state.count}  Top Score:{this.topScore}
    </ScoreBoard></Title>
     {this.state.simpsons.map(simpsons => (
    <Card
    cardClicked = {this.cardClicked}
     id={simpsons.id}
     key={simpsons.id}
     name={simpsons.name}
     image={simpsons.image}
    />
    ))}
    </Wrapper>
 
  )};

     };

export default App;


// This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

// Instructions
// Check out the example solution and study the app's basic functionality.

// The application should render different images (of your choice) to the screen. Each image should listen for click events.

// The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

// Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

// Once the user's score is reset after an incorrect guess, the game should restart.

// When complete, the application should be deployed to Github Pages. See the README generated with Create React App for instructions on deploying the application to Github Pages.

// More information can be found below.

// Hints
// Begin by building a non-functioning static version for your Clicky Game. Then work on making the game interactive.

// Reminder: Submission on BCS
// Please submit both the deployed GitHub Pages link to your homework AND the link to the Github Repository!
// Create a README.md
// Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way:
