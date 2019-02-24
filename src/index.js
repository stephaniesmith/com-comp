import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail
				author={faker.name.firstName()}
				img={faker.image.avatar()}
				comment={faker.lorem.sentence()}
				timeAgo="Today at 4:34PM"/>
			<CommentDetail
				author={faker.name.firstName()}
				img={faker.image.avatar()}
				comment={faker.lorem.sentence()}
				timeAgo="Today at 10:23AM"/>
			<CommentDetail
				author={faker.name.firstName()}
				img={faker.image.avatar()}
				comment={faker.lorem.sentence()}
				timeAgo="Yesterday at 6:03PM"/>
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#root'));
