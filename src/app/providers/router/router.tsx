import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/app/layouts/base-layout/ui/Layout";
import { CollectionDetailsPage } from "@/pages/CollectionDetailsPage";
import { CollectionsPage } from "@/pages/CollectionsPage";
import { NotFound } from "@/pages/NotFound";
import { QuestionDetailsPage } from "@/pages/QuestionDetailsPage";
import { QuestionsPage } from "@/pages/QuestionsPage";
import { TrainerSetupPage } from "@/pages/TrainerSetupPage";
import { TrainerQuizPage } from "@/pages/TrainerQuizPage";
import { TrainerResultPage } from "@/pages/TrainerResultPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <QuestionsPage />,
      },

      {
        path: "questions/:slug",
        element: <QuestionDetailsPage />,
      },
      {
        path: "collections",
        element: <CollectionsPage />,
      },
      {
        path: "collections/:collectionId",
        element: <CollectionDetailsPage />,
      },
      {
        path: "trainer",
        element: <TrainerSetupPage />,
      },
      {
        path: "trainer/quiz",
        element: <TrainerQuizPage />,
      },
      {
        path: "trainer/result",
        element: <TrainerResultPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
