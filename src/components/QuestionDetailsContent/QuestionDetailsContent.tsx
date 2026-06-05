import { BackButton } from "@/components/BackButton/BackButton";
import { MentorCard } from "@/components/MentorCard/MentorCard";
import { QuestionAnswerCard } from "@/components/QuestionAnswerCard/QuestionAnswerCard";
import { QuestionDetailsHero } from "@/components/QuestionDetailsHero/QuestionDetailsHero";
import { QuestionDetailsNavigation } from "@/components/QuestionDetailsNavigation/QuestionDetailsNavigation";
import type { Question } from "@/types/question";

type QuestionDetailsContentProps = {
  question: Question;
  onBack: () => void;
  onOpenSidebar: () => void;
};

export const QuestionDetailsContent = ({
  question,
  onBack,
  onOpenSidebar,
}: QuestionDetailsContentProps) => {
  return (
    <div className="question-details__main">
      <BackButton onClick={onBack} />

      <QuestionDetailsHero question={question} onOpenSidebar={onOpenSidebar} />

      <QuestionDetailsNavigation currentQuestionId={question.id} />

      <QuestionAnswerCard
        title="Краткий ответ"
        content={question.shortAnswer}
      />

      <QuestionAnswerCard
        title="Развёрнутый ответ"
        content={question.longAnswer}
        isExpandable
      />

      <div className="question-details__mentor-mobile">
        <MentorCard />
      </div>
    </div>
  );
};
