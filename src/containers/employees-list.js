import React, { Component } from 'react';
import {connect} from 'react-redux';

class EmployeesList extends Component{
	renderList(){
	
		return this.props.employees.map((employee) => {
			const boss = employee.big;
			if(boss==="true"){
				return(
				
					<li key={employee.name} className="boss-list col-md-4">
					<img src={employee.src}/>
					<span>{employee.name}</span>
					</li>
				);
			}
			return(
			<div className="col-md-6">
				<li key={employee.name} className="employee-list">
				<img src={employee.src}/>
				{employee.name}
				</li>
			</div>
			);

			
		});
	}
	render(){
		return(
				<ul className="list-group clearfix">
					<h1 className="col-md-4">Team</h1>
					{this.renderList()}
				</ul>
			)
	}
}

function mapStateToProps(state) {
	return{
		employees: state.employees
	};
}

export default connect(mapStateToProps)(EmployeesList);