import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './user_list.css';
import Cv_Navbar from '../Cv_Navbar/cv_navbar';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch users from the backend API
        const fetchUsers = async () => {
            try {
                // Replace with your API call
                // const response = await fetch('https://your-backend-api.com/users');
                // const data = await response.json();
                // setUsers(data);

                // Dummy data for demonstration
                const dummyUsers = [
                    { id: 'user1', username: 'User One', profilePic: 'path/to/profilePic1.jpg' },
                    { id: 'user2', username: 'User Two', profilePic: 'path/to/profilePic2.jpg' },
                    { id: 'user3', username: 'User Three', profilePic: 'path/to/profilePic3.jpg' },
                ];
                setUsers(dummyUsers);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleUserClick = (recipientId) => {
        navigate(`/chat/${recipientId}`);
    };

    return (
        <div>
            <Cv_Navbar/>
            <div className="user-list">
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => handleUserClick(user.id)}>
                        <img src={user.profilePic} alt={user.username} className="profile-pic" />
                        <span>{user.username}</span>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default UserList;
