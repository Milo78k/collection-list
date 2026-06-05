import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/Layout/Layout";
import { QuestionsPage } from "@/pages/QuestionsPage/QuestionsPage";
import { QuestionDetailsPage } from "@/pages/QuestionDetailsPage/QuestionDetailsPage";
import { NotFound } from "@/pages/NotFound/NotFound";
import { CollectionsPage } from "@/pages/CollectionsPage/CollectionsPage";
import { CollectionDetailsPage } from "@/pages/CollectionDetailsPage/CollectionDetailsPage";

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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
