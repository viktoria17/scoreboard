import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
	players: [
	  {
		name: "Guil",
		score: 0,
		id: 1
	  },
	  {
		name: "Treasure",
		score: 0,
		id: 2
	  },
	  {
		name: "Ashley",
		score: 0,
		id: 3
	  },
	  {
		name: "James",
		score: 0,
		id: 4
	  }
	]
  };

  handleScoreChange = (index, delta) => {
	this.setState(prevState => {
	  // New 'players' array – a copy of the previous `players` state
	  const updatedPlayers = [...prevState.players];
	  // A copy of the player object we're targeting
	  const updatedPlayer = {...updatedPlayers[index]};

	  // Update the target player's score
	  updatedPlayer.score += delta;
	  // Update the 'players' array with the target player's latest score
	  updatedPlayers[index] = updatedPlayer;

	  // Update the `players` state without mutating the original state
	  return {
		players: updatedPlayers
	  };
	});
  };

  handleRemovePlayer = (id) => {
	this.setState(prevState => {
	  return {
		players: prevState.players.filter(p => p.id !== id)
	  };
	});
  };

  render() {
	return (
		<div className="scoreboard">
		  <Header
			  title="Scoreboard"
			  players={this.state.players}
		  />

		  {/* Players list */}
		  {this.state.players.map((player, index) =>
			  <Player
				  name={player.name}
				  id={player.id}
				  key={player.id.toString()}
				  removePlayer={this.handleRemovePlayer}
				  score={player.score}
				  index={index}
				  changeScore={this.handleScoreChange}
			  />
		  )}
		</div>
	);
  }
}

export default App;
