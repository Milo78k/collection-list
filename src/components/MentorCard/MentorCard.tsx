import mentorAvatar from "@/assets/icons/Ellipse 3588.svg";

import telegramIcon from "@/assets/icons/Telegram-mentor.svg";
import youtubeIcon from "@/assets/icons/Youtube-mentor.svg";
import profileIcon from "@/assets/icons/Profile.svg";

import "./MentorCard.scss";

export const MentorCard = () => {
  return (
    <article className="mentor-card">
      <div className="mentor-card__top">
        <img
          src={mentorAvatar}
          alt="Mentor avatar"
          className="mentor-card__avatar"
        />

        <div>
          <h3 className="mentor-card__name">Руслан Куянец</h3>

          <p className="mentor-card__role">Python Guru</p>
        </div>
      </div>

      <p className="mentor-card__description">
        Guru – это эксперты YeaHub, которые помогают развивать комьюнити.
      </p>

      <div className="mentor-card__socials">
        <a href="#">
          <img src={telegramIcon} alt="Telegram" />
        </a>

        <a href="#">
          <img src={youtubeIcon} alt="Youtube" />
        </a>

        <a href="#">
          <img src={profileIcon} alt="Profile" />
        </a>
      </div>
    </article>
  );
};
