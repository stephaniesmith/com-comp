import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author={faker.name.firstName()} comment={faker.lorem.sentence()}/>
            <CommentDetail author={faker.name.firstName()} comment={faker.lorem.sentence()}/>
            <CommentDetail author={faker.name.firstName()} comment={faker.lorem.sentence()}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));
