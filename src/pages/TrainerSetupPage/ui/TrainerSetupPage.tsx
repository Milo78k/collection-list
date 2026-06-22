import { TrainerSetupForm } from "@/features/trainer-setup-form";
import { Loader } from "@/shared/ui/Loader/Loader";

import { useTrainerSetupPage } from "../model/useTrainerSetupPage";

import "./TrainerSetupPage.scss";

export const TrainerSetupPage = () => {
  const {
    specializations,
    skills,
    isInitialLoading,
    isQuizCreating,
    quizErrorMessage,
    handleSubmit,
  } = useTrainerSetupPage();

  return (
    <section className="trainer-setup-page">
      <div className="trainer-setup-page__container">
        <div className="trainer-setup-page__content">
          <h1 className="trainer-setup-page__title">Собеседование</h1>

          {quizErrorMessage && (
            <p className="trainer-setup-page__error">{quizErrorMessage}</p>
          )}

          {isInitialLoading ? (
            <Loader text="Загрузка настроек..." />
          ) : (
            <TrainerSetupForm
              specializations={specializations}
              skills={skills}
              isLoading={isQuizCreating}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </section>
  );
};
