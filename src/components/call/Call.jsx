import React, { useState } from 'react';
import './call.css';

const Call = () => {
  const emergencyMessages = [
    { id: 1, text: 'Нужна помощь' },
    { id: 2, text: 'Пожар' },
    { id: 3, text: 'Нужна скорая помощь' },
    { id: 4, text: 'Угроза жизни' },
    { id: 5, text: 'Свяжитесь со мной' },
  ];

  const [sentMessages, setSentMessages] = useState([]);
  const [isVideoCallOpen, setVideoCallOpen] = useState(false);

  const onSendMessage = (message) => {
    setSentMessages((prev) => [...prev, message]);
    alert(`Сообщение отправлено: ${message}`);
  };

  const handleVideoCall = () => {
    setVideoCallOpen(true);
  };

  return (
    <div className="call-container">
      <h2 className="heading">Экстренные вызовы</h2>

      <div className="button-container">
        {emergencyMessages.map((msg) => (
          <button key={msg.id} onClick={() => onSendMessage(msg.text)} className="button">
            {msg.text}
          </button>
        ))}
      </div>

      <div className="history">
        <h3>История отправленных сообщений:</h3>
        <ul>
          {sentMessages.map((msg, index) => (
            <li key={index} className="history-item">{msg}</li>
          ))}
        </ul>
      </div>

      <div className="video-call">
        <h2>Видеозвонки с другими глухонемыми:</h2>
        <p>Для общения с другими пользователями нажмите на кнопку ниже:</p>
        {!isVideoCallOpen ? (
          <button className="video-call-button" onClick={handleVideoCall}>
            Начать видеозвонок
          </button>
        ) : (
          <div className="video-frame-container">
            <iframe
              className="video-frame"
              allow="camera; microphone; fullscreen; display-capture"
              src="https://meet.jit.si/DeafSupportRoom"
              title="Video Call"
            ></iframe>
          </div>
        )}
      </div>

      <div className="contacts">
        <h3>Контакты для связи:</h3>
        <ul className="contact-list">
          <li>
            Телефон: <a href="tel:+996555600117">+996 (555) 600-117</a>
          </li>
          <li>
            Email: <a href="mailto:iskakovkuttuubaj0207@gmail.com">iskakovkuttuubaj0207@gmail.com</a>
          </li>
          <li>
            WhatsApp: <a href="https://wa.me/996555600117" target="_blank" rel="noopener noreferrer">Написать</a>
          </li>
          <li>
            Telegram: <a href="https://t.me/bayyaa1" target="_blank" rel="noopener noreferrer">Связаться</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Call;
