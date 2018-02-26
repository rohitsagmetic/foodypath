import React, { Component } from 'react';
import Details from './Details';

export default class Lists extends Component {
	constructor() {
		super()

		this.state = {
			locations: null,
			hasLists: false,
			theID: null,
			active: false,
		}
	}

	componentDidMount() {
		this.setState({
			locations: this.props.availableLists,
    		hasList: false,
    		active: true,
		})
    }

	getDetails(id) {
		this.setState(() => {
			return {
				hasLists: true,
				theID: id
			}
		})
	}

	render() {
		return (
			<div className="lists">
			{this.state.active ? <ul className="lists__wrapper">
				{this.state.locations.filter(list => list.name.toLowerCase().includes(this.props.filterQuery.toLowerCase()))
					.map((l) => {
					return <li className="list__item" key={l.id} onClick={() => this.getDetails(l.id)}>
						<div>
							<h3>{l.name}</h3>
							<span>{l.distance}km</span>
							<span>{l.rating} stars</span>
							<section>
								<p>Description</p>
							</section>
						</div>
					</li>
				})}
			</ul> : ''}
			{this.state.hasLists ? <Details check={this.state.theID} /> : 'No lists found!'}
			</div>
		)
	}
}