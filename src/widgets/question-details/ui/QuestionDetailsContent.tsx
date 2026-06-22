import { MentorCard } from "@/entities/mentor/ui/MentorCard";
import type { Question } from "@/entities/question";
import { BackButton } from "@/shared/ui/BackButton/BackButton";
import { QuestionAnswerCard } from "@/widgets/question-details/ui/QuestionAnswerCard";
import { QuestionDetailsHero } from "@/widgets/question-details/ui/QuestionDetailsHero";
import { QuestionDetailsNavigation } from "@/widgets/question-details/ui/QuestionDetailsNavigation";

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
