import { Routes, Route } from "react-router-dom";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

import { QuestionsPage } from "@/pages/QuestionsPage/QuestionsPage";
import { QuestionDetailsPage } from "@/pages/QuestionDetailsPage/QuestionDetailsPage";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <Routes>
          <Route path="/" element={<QuestionsPage />} />

          <Route path="/questions/:slug" element={<QuestionDetailsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
