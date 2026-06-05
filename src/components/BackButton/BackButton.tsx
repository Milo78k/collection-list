import arrowLeft from "@/assets/icons/Vector-left.svg";

type BackButtonProps = {
  onClick: () => void;
};

export const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button type="button" className="question-details__back" onClick={onClick}>
      <img src={arrowLeft} alt="Previous" />
      <span>Назад</span>
    </button>
  );
};
