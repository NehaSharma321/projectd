import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-button" onClick={toggleChatbot}>
        💬
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chatbot</h3>
            <button onClick={toggleChatbot}>X</button>
          </div>
          <div className="chatbot-body">
            <p>Hello! How can I assist you?</p>
            {/* Add more chat functionalities here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
