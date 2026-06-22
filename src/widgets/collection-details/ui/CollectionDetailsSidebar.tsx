import type { Collection } from "@/entities/collection/model/collection";
import telegramIcon from "@/shared/assets/icons/Telegram.svg";

type CollectionDetailsSidebarProps = {
  collection: Collection;
};

export default function CollectionDetailsSidebar({
  collection,
}: CollectionDetailsSidebarProps) {
  const isValidImageSrc = (src?: string) => {
    return Boolean(src && (src.startsWith("http") || src.startsWith("/")));
  };

  const companyImageSrc = collection.company?.imageSrc ?? undefined;
  const companyTitle = collection.company?.title ?? "Компания";

  return (
    <div className="collection-details-aside__card">
      <div className="collection-details-aside__section">
        <p className="collection-details-aside__label">Специализация</p>

        <div className="collection-details-aside__tags">
          {collection.specializations.map((item) => (
            <span key={item.id} className="collection-details-aside__tag">
              {item.title}
            </span>
          ))}
        </div>
      </div>

      <div className="collection-details-aside__section">
        <p className="collection-details-aside__label">Компания</p>

        <div className="collection-details-aside__company-chip">
          {isValidImageSrc(companyImageSrc) ? (
            <img
              src={companyImageSrc}
              alt={companyTitle}
              className="collection-details-aside__company-image"
            />
          ) : (
            <span className="collection-details-aside__company-placeholder">
              {companyTitle.slice(0, 1)}
            </span>
          )}

          <span>{companyTitle}</span>
        </div>
      </div>

      <div className="collection-details-aside__section">
        <p className="collection-details-aside__label">Доступ</p>

        <span className="collection-details-aside__tag">
          {collection.isFree ? "Для всех" : "Для участников"}
        </span>
      </div>

      <div className="collection-details-aside__section">
        <p className="collection-details-aside__label">Количество вопросов</p>

        {collection.questionsCount > 0 ? (
          <span className="collection-details-aside__count">
            {collection.questionsCount}
          </span>
        ) : (
          <span className="collection-details-aside__empty">Вопросов нет</span>
        )}
      </div>

      {!!collection.keywords.length && (
        <div className="collection-details-aside__section">
          <p className="collection-details-aside__label">Ключевые слова</p>

          <div className="collection-details-aside__keywords">
            {collection.keywords.map((keyword) => (
              <span key={keyword}>#{keyword}</span>
            ))}
          </div>
        </div>
      )}

      <div className="collection-details-aside__section">
        <p className="collection-details-aside__author">
          Автор: <span>{collection.createdBy?.username ?? "Неизвестно"}</span>
        </p>
      </div>

      <a href="/" className="collection-details-aside__telegram">
        <img src={telegramIcon} alt="telegram icon" />

        <span>
          Подпишись на{" "}
          <b className="collection-details-aside__telegram-channel">
            Python Developer
          </b>{" "}
          в Telegram
        </span>
      </a>
    </div>
  );
}
