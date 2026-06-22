import type { JSX } from "react";
import { Link } from "react-router-dom";
import humburgerIcon from "@/shared/assets/icons/Hamburger Menu.svg";
import "./Header.scss";

import logoIcon from "@/shared/assets/icons/logo.svg";
import logoText from "@/shared/assets/icons/Yeahub.svg";

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logoIcon} alt="Yeahub logo" className="header__logo-icon" />
          <img src={logoText} alt="Yeahub" className="header__logo-text" />
        </Link>

        <nav className="header__nav">
          <Link to="/">База вопросов</Link>
          <Link to="/trainer">Тренажёр</Link>
          <Link to="/collections">Материалы</Link>
          <Link to="/skills">Навыки (hh)</Link>
        </nav>

        <div className="header__actions">
          <button className="header__login" type="button">
            Вход
          </button>
          <button className="header__register" type="button">
            Регистрация
          </button>
        </div>

        <button
          className="header__burger"
          type="button"
          aria-label="Открыть меню"
        >
          <img src={humburgerIcon} alt="Меню" />
        </button>
      </div>
    </header>
  );
};
