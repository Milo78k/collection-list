import starIcon from "@/assets/icons/Stars Minimalistic.svg";
import questionIcon from "@/assets/icons/Vector-q.svg";

type CollectionCardMetaProps = {
  isFree: boolean;
  questionsCount: number;
};

export const CollectionCardMeta = ({
  isFree,
  questionsCount,
}: CollectionCardMetaProps) => {
  return (
    <div className="collection-card__meta">
      <span className="collection-card__access">
        <img src={starIcon} alt="" className="collection-card__icon" />

        {isFree ? "Для всех" : "Для участников"}
      </span>

      <span className="collection-card__questions">
        <img src={questionIcon} alt="" className="collection-card__icon" />

        {questionsCount > 0 ? `${questionsCount} вопросов` : "Вопросов нет"}
      </span>
    </div>
  );
};
