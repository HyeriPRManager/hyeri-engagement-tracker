import React from 'react';

interface PostCardProps {
    title: string;
    imageUrl: string;
    content: string;
    date: string;
    onClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ title, imageUrl, content, date, onClick }) => {
    return (
        <div className="post-card" onClick={onClick}>
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p>{content}</p>
            <span>{date}</span>
        </div>
    );
};

export default PostCard;