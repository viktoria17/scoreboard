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

	render() {
		return (
			<form>
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