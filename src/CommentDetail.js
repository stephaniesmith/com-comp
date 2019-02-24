import React from 'react';
import faker from 'faker';

const CommentDetail = ({ author, comment }) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">{comment}</div>
            </div>
        </div>
    )
}

export default CommentDetail;
