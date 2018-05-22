import React, { Component } from 'react';
import EmployeesList from '../containers/employees-list';
import OpeningList from '../containers/opening-list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<section className="team clearfix">
      		<EmployeesList/>
      	</section>
      	<section className="open-position clearfix">
      		<OpeningList/>
      	</section>
      </div>
    );
  }
}
