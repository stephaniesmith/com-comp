import React from 'react';
import PropTypes from 'prop-types';

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

CommentDetail.propTypes = {
	author: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	comment: PropTypes.string.isRequired,
	timeAgo: PropTypes.string.isRequired
}

export default CommentDetail;
