type QuestionCardMetaProps = {
  rate: number;
  complexity: number;
};

export const QuestionCardMeta = ({
  rate,
  complexity,
}: QuestionCardMetaProps) => {
  return (
    <div className="question-card__meta">
      <div className="question-card__badge">
        <span>Рейтинг:</span>
        <div>{rate}</div>
      </div>

      <div className="question-card__badge">
        <span>Сложность:</span>
        <div>{complexity}</div>
      </div>
    </div>
  );
};
