import { Footer } from "@/widgets/footer/ui/Footer";
import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
