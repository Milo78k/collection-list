import "./StatisticsPromoModal.scss";

type StatisticsPromoModalProps = {
  onClose: () => void;
};

export const StatisticsPromoModal = ({
  onClose,
}: StatisticsPromoModalProps) => {
  return (
    <div className="statistics-promo-modal">
      <div className="statistics-promo-modal__overlay" onClick={onClose} />

      <div className="statistics-promo-modal__content">
        <button
          type="button"
          className="statistics-promo-modal__close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>

        <div className="statistics-promo-modal__left">
          <div className="statistics-promo-modal__icon">▥</div>

          <h2 className="statistics-promo-modal__title">
            Станьте членом сообщества
          </h2>

          <p className="statistics-promo-modal__text">
            Хотите видеть весь свой прогресс? С подпиской вы получите доступ ко
            всем метрикам:
          </p>

          <ul className="statistics-promo-modal__list">
            <li>Полный доступ к тренажёру</li>
            <li>Умный режим повторения вопросов</li>
            <li>Детальная статистика прогресса</li>
            <li>Закрытые собесы топовых компаний</li>
          </ul>

          <button type="button" className="statistics-promo-modal__button">
            Стать участником
          </button>

          <p className="statistics-promo-modal__note">7 дней бесплатно</p>
        </div>

        <div className="statistics-promo-modal__right">
          <div className="statistics-promo-modal__preview">
            <p className="statistics-promo-modal__preview-title">Прогресс</p>

            <div className="statistics-promo-modal__mini-card">
              <span>Пройдено 3 из 3 вопросов изучен!</span>
              <div className="statistics-promo-modal__green-progress">
                <span />
              </div>
            </div>

            {[
              ["HTML", "80%"],
              ["CSS", "40%"],
              ["JavaScript", "90%"],
              ["React", "100%"],
              ["Git", "100%"],
            ].map(([skill, value]) => (
              <div key={skill} className="statistics-promo-modal__skill">
                <div className="statistics-promo-modal__skill-top">
                  <span>{skill}</span>
                  <span>{value}</span>
                </div>

                <div className="statistics-promo-modal__progress">
                  <span style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
