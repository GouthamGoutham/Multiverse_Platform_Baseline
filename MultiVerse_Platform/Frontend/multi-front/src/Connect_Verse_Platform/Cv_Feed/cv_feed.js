import React, { useState, useEffect } from 'react';
import './cv_feed.css';
import Cv_Navbar from '../Cv_Navbar/cv_navbar';

const FeedScreen = () => {
    const [posts, setPosts] = useState([]);
    const [showComments, setShowComments] = useState({});

    // Dummy posts data
    const dummyPosts = [
        {
            id: 1,
            username: 'User1',
            content: 'This is the first post. Hello World!',
            caption: 'First post caption',
            likes: 10,
            likedByUser: false,
            comments: [
                { id: 1, username: 'User2', text: 'Comment 1' },
                { id: 2, username: 'User3', text: 'Comment 2' }
            ]
        },
        {
            id: 2,
            username: 'User2',
            content: 'Second post here.',
            caption: 'Second post caption',
            likes: 5,
            likedByUser: false,
            comments: [
                { id: 1, username: 'User1', text: 'Comment 1' }
            ]
        },
        {
            id: 3,
            username: 'User3',
            content: 'Another post for testing.',
            caption: 'Testing caption',
            likes: 8,
            likedByUser: false,
            comments: []
        },
        {
            id: 4,
            username: 'User4',
            content: 'Fourth post with no comments.',
            caption: 'No comments yet!',
            likes: 3,
            likedByUser: false,
            comments: []
        },
        {
            id: 5,
            username: 'User5',
            content: 'Fifth post with a single comment as a string.',
            caption: 'Just one comment',
            likes: 6,
            likedByUser: false,
            comments: [{ id: 1, username: 'User4', text: 'Single comment' }]
        }
    ];

    useEffect(() => {
        // Fetch posts from the backend API
        // Simulating fetch with dummy data
        setTimeout(() => {
            setPosts(dummyPosts);
        }, 1000); // Simulating delay
    }, []);

    // Function to handle liking a post
    const handleLike = (postId) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                if (!post.likedByUser) {
                    return { ...post, likes: post.likes + 1, likedByUser: true };
                }
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    // Function to handle adding a comment to a post
    const handleComment = async (postId, commentText) => {
        try {
            // Example: Send a request to backend to add comment to the post
            const response = await fetch(`https://your-backend-api.com/posts/${postId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: 'user123', text: commentText }), // Assuming userId and comment text are sent
            });
            if (response.ok) {
                // Update the posts state to reflect the added comment
                const updatedPosts = posts.map(post => {
                    if (post.id === postId) {
                        const updatedComments = [...post.comments, { id: post.comments.length + 1, username: 'user123', text: commentText }];
                        return { ...post, comments: updatedComments };
                    }
                    return post;
                });
                setPosts(updatedPosts);
            } else {
                console.error('Failed to add comment.');
            }
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const toggleComments = (postId) => {
        setShowComments(prevState => ({
            ...prevState,
            [postId]: !prevState[postId]
        }));
    };

    return (
        <div style={{backgroundColor:"#d9d6f2"}}>
            <Cv_Navbar />
            <div className="feed-screen">
                <h2>Users Posts</h2>
                <div className="posts">
                    {posts.map(post => (
                        <div key={post.id} className="post">
                            <h3>{post.username}</h3>
                            <p>{post.content}</p>
                            <p><strong>Likes:</strong> {post.likes}</p>
                            <p>
                                <button 
                                    className={`like-button ${post.likedByUser ? 'liked' : ''}`} 
                                    onClick={() => handleLike(post.id)}
                                    disabled={post.likedByUser}
                                >
                                    {post.likedByUser ? '❤️' : '🤍'}
                                </button>
                            </p>
                            <div className="comments-section">
                                <button onClick={() => toggleComments(post.id)}>💬 Comments</button>
                                {showComments[post.id] && (
                                    <div className="comments">
                                        <h4>Comments:</h4>
                                        {post.comments && post.comments.length > 0 ? (
                                            <ul>
                                                {Array.isArray(post.comments) && post.comments.map(comment => (
                                                    <li key={comment.id}>
                                                        <strong>{comment.username}:</strong> {comment.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No comments yet.</p>
                                        )}
                                        {/* Display comment entry field */}
                                        <div className="comment-entry">
                                            <textarea rows="3" cols="40" placeholder="Add a comment..." />
                                            <button onClick={() => handleComment(post.id, 'New comment')}>
                                                Comment
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeedScreen;
