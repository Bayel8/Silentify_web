import React, { useState } from 'react';
import './main.css';

const introContent = {
  title: 'Добро пожаловать в наш обучающий центр!',
  subtitle:
    'Наш сайт создан для помощи глухонемым в обучении языку жестов.\nНачните свой путь к обучению прямо сейчас!',
  aboutLink: '/about',
};

const cards = [
  {
    title: 'Онлайн-курсы',
    description: 'Интерактивные уроки жестового языка для начинающих и продвинутых.',
    link: '#educational-videos',
  },
  {
    title: 'Практические занятия',
    description: 'Начни изучать алфавит.',
    link: '/azbuka',
  },
  {
    title: 'Сообщество',
    description: 'Общайтесь с другими учениками и делитесь опытом.',
    link: '/call',
  },
];


const newsItems = [
  {
    title: 'Открытие нового курса!',
    content: 'С 1 июня начинается новый курс по жестовому языку для начинающих.',
  },
  {
    title: 'Вебинар по жестам',
    content: '10 июня пройдет бесплатный вебинар от наших преподавателей.',
  },
  {
    title: 'Конкурс для учеников',
    content: 'Примите участие в конкурсе жестов и выиграйте призы!',
  },
];

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? newsItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === newsItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="main">
      {/* Вступительный блок */}
      <section className="intro-section">
        <h1>{introContent.title}</h1>
        <p>{introContent.subtitle}</p>
        <a href={introContent.aboutLink} className="learn-more-button">
          Узнать больше
        </a>
      </section>

      {/* Карточки */}
      <section className="cards-section">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href={card.link}>Перейти</a>
          </div>
        ))}
      </section>

      {/* Новости (Карусель) */}
      <section className="news-section">
        <h2 className="news-title">Новости</h2>
        <div className="news-carousel">
          <button onClick={handlePrev} className="carousel-button">←</button>
          <div className="news-item">
            <h3>{newsItems[currentIndex].title}</h3>
            <p>{newsItems[currentIndex].content}</p>
          </div>
          <button onClick={handleNext} className="carousel-button">→</button>
        </div>
      </section>
    </main>
  );
};

export default Main;
