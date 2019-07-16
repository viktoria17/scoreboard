import React, {Component} from 'react';

class AddPlayerForm extends Component {
	state = {
		value: ''
	};

	updateInputValue = (e) => {
		this.setState({
			value: e.target.value
		})
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('clicked')
		this.props.addPlayerName(this.state.value)
		this.setState({
			value: ''
		})
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					value={this.state.value}
					onChange={this.updateInputValue}
					placeholder="Enter a player's name"
				/>

				<input
					type="submit"
					value="Add Player"
				/>
			</form>
		)
	}
}

export default AddPlayerForm;