import { useNavigate } from "react-router-dom";
import { QuestionDetailsContent } from "@/components/QuestionDetailsContent/QuestionDetailsContent";
import { QuestionDetailsAside } from "@/components/QuestionDetailsAside/QuestionDetailsAside";
import { useQuestionDetailsPage } from "@/hooks/useQuestionDetailsPage";
import { Loader } from "@/components/Loader/Loader";
import "./QuestionDetailsPage.scss";

export const QuestionDetailsPage = () => {
  const navigate = useNavigate();

  const { question, isLoading, isSidebarOpen, setIsSidebarOpen } =
    useQuestionDetailsPage();

  if (isLoading) return <Loader />;
  if (!question) return <p>Вопрос не найден</p>;

  return (
    <section className="question-details">
      <div className="question-details__container">
        <div className="question-details__layout">
          <QuestionDetailsContent
            question={question}
            onBack={() => navigate(-1)}
            onOpenSidebar={() => setIsSidebarOpen(true)}
          />
          <QuestionDetailsAside
            question={question}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>
      </div>
    </section>
  );
};
