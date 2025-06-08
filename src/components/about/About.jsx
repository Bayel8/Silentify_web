import React from "react";
import "./about.css";

const teamMembers = [
  { name: "Байэл Жумакадыров", role : "Бэкенд", img: "/img/photo.jpg" },
  { name: "Ислам Махмудов", role: "Фронтенд", img: "/img/photo.jpg" },
  { name: "Нуртилек Баргыбаев", role: "Дизайн", img: "/img/photo.jpg" },
  { name: "Куттубай Искаков", role: "Бэкенд", img: "/img/photo.jpg" },
  { name: "Нурбийке Бердибекова", role: "Азбука", img: "/img/photo.jpg" },
  { name: "Перизат Байызбекова", role: "Продвижение", img: "/img/photo.jpg" }
];

const About = () => {
  return (
    <div className="about-container">

      {/* О нас */}
      <section id="about" className="about-section fade-in">
        <div className="about-content slide-left">
          <h2>О нас</h2>
          <p>
            Добро пожаловать на наш сайт, посвященный изучению языка жестов! Мы
            стремимся помочь каждому, кто хочет изучить этот уникальный способ
            общения, и содействовать инклюзии в обществе. Мы создали эту платформу,
            чтобы сделать обучение языку жестов доступным и удобным для каждого. Независимо от вашего уровня, наш сайт предлагает разнообразные ресурсы, чтобы вы могли развивать свои навыки в удобном ритме.
          </p>
        </div>
        <div className="about-img fade-in">
          <img
            src="https://static1-repo.aif.ru/1/5c/5287/4e813d3b70ae642123c28aa8bf0efba3.jpg"
            alt="Язык жестов"
          />
        </div>
      </section>

      {/* Миссия */}
      <section id="mission" className="mission-section fade-in">
        <h2>Наша миссия</h2>
        <p>
          Мы верим в равенство и доступность. Наша цель — создать платформу, где
          каждый может изучать язык жестов в удобном и дружелюбном формате.
        </p>
      </section>

      {/* Команда */}
      <section id="team" className="team-section fade-in">
        <h2>Наша команда</h2>
        <p>
          Мы — команда <strong>SignBridgeKG</strong>, студенты с общей целью: сделать жестовый язык 
          доступным и понятным каждому. Наш проект — это шаг к более открытому и инклюзивному обществу.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
