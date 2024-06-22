import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './cv_chat.css';
import Cv_Navbar from '../Cv_Navbar/cv_navbar';

const ChatScreen = () => {
    const { recipientId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef(null);
    const userId = 'loggedInUserId'; // Replace with actual logged-in user ID

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                // Replace with actual API call
                // const response = await fetch(`https://your-backend-api.com/messages?userId=${userId}&recipientId=${recipientId}`);
                // const data = await response.json();
                // setMessages(data);

                // Dummy data for demonstration
                setMessages([]);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, [userId, recipientId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            const message = {
                senderId: userId,
                recipientId: recipientId,
                text: newMessage,
                timestamp: new Date(),
            };

            try {
                // Replace with actual API call
                // const response = await fetch('https://your-backend-api.com/messages', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(message),
                // });
                // if (response.ok) {
                //     const newMessageFromAPI = await response.json();
                //     setMessages([...messages, newMessageFromAPI]);
                // } else {
                //     console.error('Failed to send message.');
                // }

                // Simulating adding a new message to the state
                setMessages([...messages, message]);
                setNewMessage('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <div style={{ backgroundColor: "#d9d6f2" }}>
            <Cv_Navbar />
            <div className="chat-screen">
                <div className="messages-list">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.senderId === userId ? 'sent' : 'received'}`}>
                            <p>{message.text}</p>
                            <span className="timestamp">{new Date(message.timestamp).toLocaleTimeString()}</span>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="message-input">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatScreen;
