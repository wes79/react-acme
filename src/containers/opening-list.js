import React, { Component } from 'react';
import {connect} from 'react-redux';

class OpeningList extends Component{
	renderList(){
		return this.props.openings.map((opening) => {
			return(
					<li key={opening.title} className="">{opening.title}
					</li>
				);
		});
	}
	render(){
		return(

				<ul className="">
					<h2>Hiring</h2>
					{this.renderList()}
				</ul>
			)
	}
}

function mapStateToProps(state) {
	return{
		openings: state.openings
	};
}

export default connect(mapStateToProps)(OpeningList);