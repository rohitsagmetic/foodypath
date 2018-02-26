import React, { Component } from 'react';

export default class Search extends Component {
	constructor() {
		super()
		
		this.state = {
			filteredList: null,
			searchTerm: null
		}

	}

	render() {
		return (
			<div className="search-filter">
				<input type="search" className="search-filter__input" onKeyUp={e => this.props.filterRun(e.target.value)} placeholder="Search Locations" />
			</div>
		)
	}
}