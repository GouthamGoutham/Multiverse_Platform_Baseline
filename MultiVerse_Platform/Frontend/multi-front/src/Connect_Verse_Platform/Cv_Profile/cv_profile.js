import React, { useState, useEffect } from 'react';
import './cv_profile.css';
import Cv_Navbar from '../Cv_Navbar/cv_navbar';

const ProfileScreen = () => {
    const [user, setUser] = useState({
        username: 'User123',
        bio: 'This is my bio',
        posts: []
    });
    const [editBio, setEditBio] = useState(false);
    const [newBio, setNewBio] = useState(user.bio);
    const [newPostCaption, setNewPostCaption] = useState('');
    const [newPostFile, setNewPostFile] = useState(null);
    const [showComments, setShowComments] = useState({});

    useEffect(() => {
        // Fetch user data from the backend API
        const fetchUserData = async () => {
            // Example: Fetch user data from your backend
            // const response = await fetch('https://your-backend-api.com/user');
            // const data = await response.json();
            // setUser(data);

            // Dummy data for testing
            setUser({
                username: 'User123',
                bio: 'This is my bio',
                posts: [
                    {
                        id: 1,
                        username: 'User123',
                        content: 'https://via.placeholder.com/150',
                        caption: 'First post caption',
                        likes: 10,
                        likedByUser: false,
                        comments: [
                            { id: 1, username: 'User2', text: 'Comment 1' },
                            { id: 2, username: 'User3', text: 'Comment 2' }
                        ],
                        type: 'image'
                    },
                    {
                        id: 2,
                        username: 'User123',
                        content: 'https://via.placeholder.com/150',
                        caption: 'Second post caption',
                        likes: 5,
                        likedByUser: false,
                        comments: [],
                        type: 'image'
                    },
                    {
                        id: 3,
                        username: 'User123',
                        content: 'https://www.w3schools.com/html/mov_bbb.mp4',
                        caption: 'Third post caption',
                        likes: 8,
                        likedByUser: false,
                        comments: [
                            { id: 1, username: 'User4', text: 'Comment 1' }
                        ],
                        type: 'video'
                    }
                ]
            });
        };

        fetchUserData();
    }, []);

    const handleSaveBio = () => {
        setUser({ ...user, bio: newBio });
        setEditBio(false);
        // Save the updated bio to the backend
    };

    const handleAddPost = () => {
        const newPost = {
            id: user.posts.length + 1,
            username: user.username,
            content: URL.createObjectURL(newPostFile),
            caption: newPostCaption,
            likes: 0,
            likedByUser: false,
            comments: [],
            type: newPostFile.type.startsWith('video/') ? 'video' : 'image'
        };
        setUser({ ...user, posts: [...user.posts, newPost] });
        setNewPostCaption('');
        setNewPostFile(null);
        // Save the new post to the backend
    };

    const handleLike = (postId) => {
        const updatedPosts = user.posts.map(post => {
            if (post.id === postId) {
                if (!post.likedByUser) {
                    return { ...post, likes: post.likes + 1, likedByUser: true };
                }
            }
            return post;
        });
        setUser({ ...user, posts: updatedPosts });
        // Save the like to the backend
    };

    const toggleComments = (postId) => {
        setShowComments(prevState => ({
            ...prevState,
            [postId]: !prevState[postId]
        }));
    };

    return (
        <div className='cv_profile'>
            <Cv_Navbar />
            <div className="profile-screen">
                <div className="user-details">
                    <h2>{user.username}</h2>
                    {editBio ? (
                        <div>
                            <textarea
                                value={newBio}
                                onChange={(e) => setNewBio(e.target.value)}
                                rows="4"
                                cols="50"
                            />
                            <button onClick={handleSaveBio}>Save</button>
                        </div>
                    ) : (
                        <div>
                            <p>{user.bio}</p>
                            <button onClick={() => setEditBio(true)}>Edit Bio</button>
                        </div>
                    )}
                </div>
                <div className="new-post">
                    <h3>Add New Post</h3>
                    <label className="upload-button">
                        📤 Choose File
                        <input
                            type="file"
                            accept="image/*,video/*"
                            onChange={(e) => setNewPostFile(e.target.files[0])}
                        />
                    </label>
                    <input
                        type="text"
                        value={newPostCaption}
                        onChange={(e) => setNewPostCaption(e.target.value)}
                        placeholder="Post caption"
                    />
                    <button onClick={handleAddPost}>Post</button>
                </div>
                <div className="user-posts">
                    <h3>Your Posts</h3>
                    {user.posts.map(post => (
                        <div key={post.id} className="post">
                            <h4>{post.username}</h4>
                            {post.type === 'image' ? (
                                <img src={post.content} alt={post.caption} />
                            ) : (
                                <video controls>
                                    <source src={post.content} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                            <p><strong>Caption:</strong> {post.caption}</p>
                            <p>
                                <span
                                    onClick={() => handleLike(post.id)}
                                    style={{ cursor: 'pointer', color: post.likedByUser ? 'red' : 'grey' }}
                                >
                                    ❤️ {post.likes}
                                </span>
                            </p>
                            <div className="comments-section">
                                <button onClick={() => toggleComments(post.id)}>
                                    {showComments[post.id] ? 'Hide Comments' : 'Show Comments'}
                                </button>
                                {showComments[post.id] && (
                                    <div className="comments">
                                        <h4>Comments:</h4>
                                        {post.comments && post.comments.length > 0 ? (
                                            <ul>
                                                {post.comments.map(comment => (
                                                    <li key={comment.id}>
                                                        <strong>{comment.username}:</strong> {comment.text}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>No comments yet.</p>
                                        )}
                                        <div className="comment-entry">
                                            <textarea rows="2" cols="40" placeholder="Add a comment..." />
                                            <button>Comment</button>
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

export default ProfileScreen;
