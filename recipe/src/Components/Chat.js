import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, InputGroup, FormControl, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/chat.css';
import Navbar from './Navbar';

export default function Chat() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (message.trim()) {
      setMessages([...messages, { sender: 'user', text: message }]);
      console.log(process.env.REACT_APP_OPENAI_API_KEY);
      // Make API call to OpenAI API
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-3', 
            messages: [{ role: 'user', content: message }],
          }),
        });

        const data = await response.json();
        const botMessage = data.choices[0].message.content;

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: botMessage },
        ]);
      } catch (error) {
        console.error('Error fetching OpenAI API:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'Sorry, something went wrong.' },
        ]);
      }

      setMessage('');
    }
  };

  const handleBack = () => {
    navigate('/Home');
  };

  return (
    <>
      <Navbar />
      <div className="chat-container">
        <div className="chat-header">
          <h1>MealMaster Chat</h1>
          <Button variant="secondary" onClick={handleBack}>Back</Button>
        </div>
        <div className="chat-window">
          <Container>
            <Row>
              <Col>
                <div className="chat-box">
                  {messages.map((msg, index) => (
                    <Card key={index} className={`chat-message ${msg.sender}`}>
                      <Card.Body>{msg.text}</Card.Body>
                    </Card>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="chat-input">
          <InputGroup>
            <FormControl
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
            <Button onClick={handleSend} variant="primary">
              <i className="fas fa-paper-plane"></i>
            </Button>
          </InputGroup>
        </div>
      </div>
    </>
  );
}
