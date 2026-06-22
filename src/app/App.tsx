import { Routes, Route } from "react-router-dom";

import { QuestionsPage } from "@/pages/QuestionsPage/ui/QuestionsPage";
import { QuestionDetailsPage } from "@/pages/QuestionDetailsPage/ui/QuestionDetailsPage";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

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
