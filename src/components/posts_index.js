import React, { Component } from 'react';

class PostsIndex extends Component {
	componentWillMount() {
		console.log("this will be a good time to call the action creator to fetch posts");
	}

	render() {
		return (
			<div>List of blog posts!</div>
		);
	}
}

export default PostsIndex;