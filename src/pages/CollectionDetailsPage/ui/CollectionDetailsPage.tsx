import { useState } from "react";
import { CollectionDetailsAside } from "@/widgets/collection-details/ui/CollectionDetailsAside";
import { CollectionHero } from "@/widgets/collection-hero/ui/CollectionHero";
import { CollectionQuestionsSection } from "@/widgets/collection-details/ui/CollectionQuestionsSection";

import { MentorCard } from "@/entities/mentor/ui/MentorCard";
import { useCollectionDetailsPage } from "@/pages/CollectionDetailsPage/model/useCollectionDetailsPage";
import "./CollectionDetailsPage.scss";
import { Loader } from "@/shared/ui/Loader/Loader";

export const CollectionDetailsPage = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const {
    collection,
    questionsData,
    currentPage,
    setCurrentPage,
    isCollectionLoading,
    isQuestionsLoading,
    collectionErrorMessage,
    questionsErrorMessage,
    totalPages,
  } = useCollectionDetailsPage();

  if (isCollectionLoading) {
    return <Loader text="Загрузка коллекции..." />;
  }

  if (collectionErrorMessage) {
    return <p>{collectionErrorMessage}</p>;
  }

  if (!collection) {
    return <p>Коллекция не найдена</p>;
  }

  const isAccessRestricted = !collection.isFree;
  const hasQuestions = collection.questionsCount > 0;

  return (
    <section className="collection-details">
      <div className="collection-details__container">
        <div className="collection-details__layout">
          <main className="collection-details__main">
            <CollectionHero
              collection={collection}
              onOpenAside={() => setIsAsideOpen(true)}
            />
            {isAccessRestricted ? (
              <div className="collection-details__restricted">
                <h2>Коллекция доступна участникам</h2>
                <p>
                  Получите доступ, чтобы посмотреть вопросы из этой коллекции.
                </p>
              </div>
            ) : (
              <CollectionQuestionsSection
                hasQuestions={hasQuestions}
                isQuestionsLoading={isQuestionsLoading}
                questionsErrorMessage={questionsErrorMessage}
                questionsData={questionsData}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
            <div className="collection-details__mentor-mobile">
              <MentorCard />
            </div>
          </main>
          <div className="collection-details__aside">
            <CollectionDetailsAside
              collection={collection}
              isOpen={isAsideOpen}
              onClose={() => setIsAsideOpen(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
