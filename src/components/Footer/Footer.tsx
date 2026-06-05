import type { JSX } from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

import logoText from "@/assets/icons/logo-white.svg";

import figmaIcon from "@/assets/icons/Figma.svg";
import telegramIcon from "@/assets/icons/Telegram_white.svg";
import youtubeIcon from "@/assets/icons/Youtube.svg";
import tiktokIcon from "@/assets/icons/footer.svg";
import githubIcon from "@/assets/icons/Github_white.svg";

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <Link to="/" className="footer__logo-link">
            <img src={logoText} alt="Yeahub" className="footer__logo" />
          </Link>

          <h2 className="footer__title">
            Выбери, каким будет IT завтра, вместе с нами
          </h2>

          <p className="footer__description">
            YeaHub — это полностью открытый проект, призванный объединить и
            улучшить IT-сферу. Наш исходный код доступен для просмотра на
            GitHub. Дизайн проекта также открыт для ознакомления в Figma.
          </p>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            <span>© 2024 YeaHub</span>

            <Link to="/documents">Документы</Link>
          </div>

          <div className="footer__socials">
            <span>Ищите нас и в других соцсетях @yeahub_it</span>

            <div className="footer__social-list">
              <a href="/">
                <img src={figmaIcon} alt="Figma" />
              </a>

              <a href="/">
                <img src={telegramIcon} alt="Telegram" />
              </a>

              <a href="/">
                <img src={youtubeIcon} alt="YouTube" />
              </a>

              <a href="/">
                <img src={tiktokIcon} alt="TikTok" />
              </a>

              <a href="/">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
