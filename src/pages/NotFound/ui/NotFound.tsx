import { Link } from "react-router-dom";

import "./NotFound.scss";

export const NotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <span className="not-found__code">404</span>

        <h1 className="not-found__title">Страница не найдена</h1>

        <p className="not-found__description">
          Возможно, страница была удалена, перемещена или ссылка указана
          неверно.
        </p>

        <Link to="/" className="not-found__button">
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
};
