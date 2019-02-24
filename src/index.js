import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					img={faker.image.avatar()}
					comment={faker.lorem.sentence()}
					timeAgo="Today at 4:34PM"/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					img={faker.image.avatar()}
					comment={faker.lorem.sentence()}
					timeAgo="Today at 10:23AM"/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					img={faker.image.avatar()}
					comment={faker.lorem.sentence()}
					timeAgo="Yesterday at 6:03PM"/>
			</ApprovalCard>
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#root'));
