type TrainerResultCircleStatsProps = {
  totalQuestions: number;
  knownCount: number;
  unknownCount: number;
  unansweredCount: number;
  learnedPercent: number;
};

export const TrainerResultCircleStats = ({
  totalQuestions,
  knownCount,
  unknownCount,
  unansweredCount,
  learnedPercent,
}: TrainerResultCircleStatsProps) => {
  return (
    <div className="trainer-result__circle-card">
      <h2 className="trainer-result__section-title">
        Статистика пройденных <br />
        вопросов
      </h2>

      <div
        className="trainer-result__circle"
        style={{
          background: `conic-gradient(#009b2f ${learnedPercent}%, #ffe6a6 0)`,
        }}
      >
        <div className="trainer-result__circle-inner">
          <span>{learnedPercent}%</span>
          <span>Изучено</span>
        </div>
      </div>

      <div className="trainer-result__mini-stats">
        <div className="trainer-result__mini-stat">
          <span>Всего</span>
          <strong>{totalQuestions}</strong>
        </div>

        <div className="trainer-result__mini-stat">
          <span>Новые</span>
          <strong>{unansweredCount}</strong>
        </div>

        <div className="trainer-result__mini-stat">
          <span>В процессе</span>
          <strong>{unknownCount}</strong>
        </div>

        <div className="trainer-result__mini-stat">
          <span>Изучено</span>
          <strong>{knownCount}</strong>
        </div>
      </div>
    </div>
  );
};
