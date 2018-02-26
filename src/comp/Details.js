import React, { Component } from 'react';

export default class Details extends Component {
	constructor() {
		super()
		this.state = {
			lists: [
			{
				'id': 1,
				'data': 'All the details here including map and other information.'
			},
			{
				'id': 2,
				'data': 'Some other stuff'
			},
			{
				'id': 3,
				'data': 'This need cleaning'
			},
			],
			outputID: null
		}
	}

	componentDidMount() {
		this.setState({
			outputID: this.props.check
		})
	}

	componentWillReceiveProps(nextProp) {
		this.setState({
			outputID: nextProp.check
		})
	}

	render () {
		return (
			<section>
				<ul>
					{this.state.lists.map((list) => {
						return this.state.outputID === list.id
						? <li key={list.id} data-id={list.id}>{list.data}</li> : ''
					})}
				</ul>
			</section>
		)
	}
}