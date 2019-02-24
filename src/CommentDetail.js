import React from 'react';

const CommentDetail = ({ author, img, comment, timeAgo }) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={img}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">{timeAgo}</span>
                </div>
                <div className="text">{comment}</div>
            </div>
        </div>
    )
}

export default CommentDetail;
