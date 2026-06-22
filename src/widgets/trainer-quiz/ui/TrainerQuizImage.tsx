type TrainerQuizImageProps = {
  imageSrc?: string | null;
};

export const TrainerQuizImage = ({ imageSrc }: TrainerQuizImageProps) => {
  return (
    <div className="trainer-quiz__image-wrapper">
      {imageSrc ? (
        <img className="trainer-quiz__image" src={imageSrc} alt="" />
      ) : (
        <div className="trainer-quiz__image-placeholder" />
      )}
    </div>
  );
};
